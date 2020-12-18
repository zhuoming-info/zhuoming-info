import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import {
  bookmarkOutline,
  heartOutline,
  heartSharp,
  trashOutline,
  trashSharp,
  settingsOutline,
  settingsSharp,
  logOutOutline,
  logOutSharp,
  notificationsOutline,
  notificationsSharp,
  documentTextOutline,
  documentTextSharp,
  chatbubblesOutline,
  chatbubblesSharp
} from 'ionicons/icons';
import './Menu.css';
import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom';
import { Contexts } from "../util/Contexts"
import { useLocation } from 'react-router-dom';
import axios from 'axios';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: '任务',
    url: '/user/task',
    iosIcon: documentTextOutline,
    mdIcon: documentTextSharp
  },
  {
    title: '帖子',
    url: '/user/post',
    iosIcon: chatbubblesOutline,
    mdIcon: chatbubblesSharp
  },
  {
    title: '通知',
    url: '/user/notice',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp
  },
  {
    title: '收藏',
    url: '/user/favorite',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: '设置',
    url: '/user/setting',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  },
  {
    title: '回收站',
    url: '/user/trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  const ctx = useContext(Contexts);
  const [login, setLogin] = useState(true)

  const signOut = () => {
    axios.post('/api/user/signout',)
      .then(function (res) {
        ctx.user = {
          id: null,
          username: null,
          email: null,
          role: null,
          skill: null,
          intro: null
        }
        setLogin(false)
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  if (!login) {
    return (
      <Redirect to="/" />
    )
  } else {
    return (
      <IonMenu contentId="main" type="overlay" side="end">
        <IonContent>

          <IonList id="inbox-list">
            <IonListHeader>{ctx.user.username}</IonListHeader>
            <IonNote>{ctx.user.email}</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>

          <IonList id="labels-list">
            <IonListHeader>最近访问</IonListHeader>
            {labels.map((label, index) => (
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList>

          <IonList id="inbox-list">
            <IonMenuToggle autoHide={false}>
              <IonItem className={location.pathname === '/user/signout' ? 'selected' : ''} routerDirection="none" lines="none" detail={false} onClick={signOut}>
                <IonIcon slot="start" ios={logOutOutline} md={logOutSharp} />
                <IonLabel>登出</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>

        </IonContent>
      </IonMenu>
    )
  }
};

export default Menu;
