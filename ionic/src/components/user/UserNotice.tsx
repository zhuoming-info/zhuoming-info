import React from "react";
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

const UserNotice: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>通知</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        UserNotice
      </IonContent>
    </>
  );
};

export default UserNotice;