import React, { useEffect, useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonItem, IonCard, IonRow, IonGrid,
  IonCol, IonButtons, IonButton, IonIcon,
  IonCardContent, IonLabel, IonAvatar
} from '@ionic/react';
import { heartOutline, chatbubblesOutline, addOutline, swapVerticalOutline } from 'ionicons/icons';
import HeaderLarge from '../components/HeaderLarge';
import axios from 'axios';

const Community: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      likeUsersId: [],
      content: "",
      userId: "",
      id: ""
    }
  ])
  useEffect(() => {
    axios.get('/api/post')
      .then(function (res) {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="论坛" /> : (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonIcon icon={addOutline}></IonIcon>发帖
              </IonButton>
            </IonButtons>
            <IonTitle>论坛</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                筛选<IonIcon icon={swapVerticalOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="12" size-md="10" size-lg="8" style={{ margin: "0 auto" }}>
              <IonTitle>所有帖子</IonTitle>
              {posts.map((post, index) => {
                return (
                  <IonCard key={index} button>
                    <IonItem>
                      <IonAvatar slot="start">
                        <img alt="avatar" src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
                      </IonAvatar>
                      <IonLabel>
                        <h2>faiyuching</h2>
                        <p>2020/12/23 12:34 AM</p>
                      </IonLabel>
                    </IonItem>
                    <IonCardContent>
                      {post.content}
                    </IonCardContent>
                    <IonItem lines="none">
                      <IonButtons slot="end">
                        <IonButton color="medium">
                          <IonIcon icon={heartOutline}></IonIcon>12
                        </IonButton>
                        <IonButton color="medium">
                          <IonIcon icon={chatbubblesOutline}></IonIcon>22
                        </IonButton>
                      </IonButtons>
                    </IonItem>
                  </IonCard>
                )
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Community;



