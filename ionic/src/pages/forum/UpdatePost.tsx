import React, { useState, useEffect } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonItem, IonButtons, IonButton,
  IonLabel, IonBackButton, IonTextarea, IonInput,
  IonGrid, IonRow, IonCol
} from '@ionic/react';
import Signin from '../Signin'
import axios from 'axios';

const UpdatePost: React.FC = (props: any) => {
  const [tag, setTag] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    axios.get(`/api/post/${props.match.params.id}`)
      .then(function (post) {
        setTag(post.data.tag)
        setContent(post.data.content)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.match.params.id])

  const onSubmit = () => {
    axios.put(`/api/post/${props.match.params.id}`, { tag, content })
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
            <IonTitle>修改帖子</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={onSubmit} color="primary">提交</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol
                size-xs="12"
                size-sm="10"
                size-md="8"
                size-lg="6"
                style={{ margin: "0 auto" }}>
                <IonItem>
                  <IonLabel position="stacked">标签:</IonLabel>
                  <IonInput value={tag} onIonChange={e => setTag(e.detail.value!)}>#</IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">内容：</IonLabel>
                  <IonTextarea rows={10} value={content} onIonChange={e => setContent(e.detail.value!)}></IonTextarea>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }

};

export default UpdatePost;



