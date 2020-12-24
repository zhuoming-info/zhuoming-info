import React, { useEffect, useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonItem, IonCard, IonRow, IonGrid,
  IonCol, IonButtons, IonButton, IonIcon,
  IonCardContent, IonCardHeader, IonCardTitle,
  IonCardSubtitle,
  IonLabel
} from '@ionic/react';
import { heartOutline, chatbubblesOutline } from 'ionicons/icons';
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
            <IonTitle>论坛</IonTitle>
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
                  <IonCard key={index}>
                    {/* <IonCardHeader>
                      <IonCardTitle>faiyuching</IonCardTitle>
                      <IonCardSubtitle>2020/12/23 12:34 AM</IonCardSubtitle>
                    </IonCardHeader> */}
                    <IonCardContent>
                      {/* {post.content} */}
                      半生飘零还故园，一卷清词敛风烟。人生悲离何须叹，沓沓诗风作痴仙。
                    </IonCardContent>
                    <IonItem lines="none">
                      <IonLabel color="medium">2020/12/23 12:34 AM</IonLabel>
                      <IonButtons slot="end">
                        <IonButton color="medium">
                          <IonIcon icon={heartOutline}></IonIcon>
                          12
                        </IonButton>
                        <IonButton color="medium">
                          <IonIcon icon={chatbubblesOutline}></IonIcon>
                          22
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



