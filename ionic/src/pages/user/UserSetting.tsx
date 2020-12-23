import {
  IonHeader, IonToolbar, IonPage, IonSplitPane,
  IonContent, IonButtons, IonMenuButton, IonTitle,
  IonCard, IonList, IonItem, IonAvatar,
  IonLabel, IonCardTitle, IonCardSubtitle,
  IonGrid, IonRow, IonCol,
} from '@ionic/react';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserMenu from '../../components/user/UserMenu'

const UserSetting: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    avatar: "",
    username: "",
    email: "",
    skill: "",
    intro: "",
    role: ""
  })
  const userId = localStorage.getItem('userId')
  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(function (res) {
        setUserInfo(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId])
  return (
    <IonSplitPane contentId="main" when="lg">
      <UserMenu />
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>设置</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <img alt="avatar" src={userInfo.avatar} />
                </IonAvatar>
                <IonLabel>
                  <IonCardTitle>{userInfo.username}</IonCardTitle>
                  <IonCardSubtitle>{userInfo.intro}</IonCardSubtitle>
                </IonLabel>
              </IonItem>
              <IonItem color="light" lines="none">
                <IonGrid>
                  <IonRow>
                    <IonCol size-lg="4" size-md="3" size-sm="2">
                      <IonCardSubtitle>邮箱</IonCardSubtitle>
                    </IonCol>
                    <IonCol size-lg="8" size-md="9" size-sm="10">
                      <IonLabel className="ion-text-wrap">{userInfo.email}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem lines="none">
                <IonGrid>
                  <IonRow>
                    <IonCol size-lg="4" size-md="3" size-sm="2">
                      <IonCardSubtitle>用户名</IonCardSubtitle>
                    </IonCol>
                    <IonCol size-lg="8" size-md="9" size-sm="10">
                      <IonLabel className="ion-text-wrap">{userInfo.username}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem color="light" lines="none">
                <IonGrid>
                  <IonRow>
                    <IonCol size-lg="4" size-md="3" size-sm="2">
                      <IonCardSubtitle>密码</IonCardSubtitle>
                    </IonCol>
                    <IonCol size-lg="8" size-md="9" size-sm="10">
                      <IonLabel className="ion-text-wrap">........</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem lines="none">
                <IonGrid>
                  <IonRow>
                    <IonCol size-lg="4" size-md="3" size-sm="2">
                      <IonCardSubtitle>专业/技能</IonCardSubtitle>
                    </IonCol>
                    <IonCol size-lg="8" size-md="9" size-sm="10">
                      <IonLabel className="ion-text-wrap">{userInfo.skill}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem color="light" lines="none">
                <IonGrid>
                  <IonRow>
                    <IonCol size-lg="4" size-md="3" size-sm="2">
                      <IonCardSubtitle>一句话介绍</IonCardSubtitle>
                    </IonCol>
                    <IonCol size-lg="8" size-md="9" size-sm="10">
                      <IonLabel className="ion-text-wrap">{userInfo.intro}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem lines="none">
                <IonGrid>
                  <IonRow>
                    <IonCol size-lg="4" size-md="3" size-sm="2">
                      <IonCardSubtitle>角色</IonCardSubtitle>
                    </IonCol>
                    <IonCol size-lg="8" size-md="9" size-sm="10">
                      <IonLabel className="ion-text-wrap">{userInfo.role}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonList>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default UserSetting;
