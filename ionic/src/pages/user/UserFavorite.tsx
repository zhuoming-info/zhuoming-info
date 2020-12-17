import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';

const UserFavorite: React.FC = () => {
  return (
    <IonPage>
      <Header title="收藏" />
      <IonContent fullscreen>
        UserFavorite
      </IonContent>
    </IonPage>
  );
};

export default UserFavorite;