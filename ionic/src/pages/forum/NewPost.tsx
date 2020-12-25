import React, { useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonItem,
  IonButtons, IonButton,
  IonLabel, IonBackButton, IonTextarea, IonInput
} from '@ionic/react';
import Signin from '../Signin'
import axios from 'axios';

const NewPost: React.FC = () => {
  const [tag, setTag] = useState("")
  const [content, setContent] = useState("")

  const onSubmit = () => {
    axios.post('/api/post', { tag, content })
      .then(function () {
        window.location.href = "/forum"
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
              <IonBackButton defaultHref="/forum" text="取消" />
            </IonButtons>
            <IonTitle>发帖</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={onSubmit}>发送</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem>
            <IonLabel position="stacked">内容：</IonLabel>
            <IonTextarea rows={10} value={content} onIonChange={e => setContent(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">标签:</IonLabel>
            <IonInput value={tag} onIonChange={e => setTag(e.detail.value!)}>#</IonInput>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }

};

export default NewPost;



