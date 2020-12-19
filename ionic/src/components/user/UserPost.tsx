import React from "react";
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

const UserPost: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>帖子</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        UserPost
      </IonContent>
    </>
  );
};

export default UserPost;