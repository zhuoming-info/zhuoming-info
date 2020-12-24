import React, { useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonItem,
  IonButtons, IonButton,
  IonLabel, IonBackButton, IonTextarea
} from '@ionic/react';
import Signin from '../Signin'
import axios from 'axios';

const NewPost: React.FC = () => {
  const [content, setContent] = useState("")

  const onSubmit = () => {
    axios.post('/api/post', { content })
      .then(function () {
        window.location.href = "/community"
      })
      .catch(function (error) {
        console.log(error);
      })
  };
  if (!localStorage.getItem("userId")) {
    return (
      <Signin />
    )
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/community" text="取消" />
            </IonButtons>
            <IonTitle>发帖</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={onSubmit}>发送</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem lines="none">
            <IonLabel position="floating">请输入：</IonLabel>
            <IonTextarea rows={25} value={content} onIonChange={e => setContent(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }

};

export default NewPost;



