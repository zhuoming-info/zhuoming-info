import React from "react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';

const UserTask: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>任务</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        UserTask
      </IonContent>
    </>
  );
};

export default UserTask;
