import React from "react";
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

const UserFavorite: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>收藏</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        UserFavorite
      </IonContent>
    </>
  );
};

export default UserFavorite;