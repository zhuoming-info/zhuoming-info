import React from "react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';

const UserTrash: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>回收站</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        UserTrash
      </IonContent>
    </>
  );
};

export default UserTrash;