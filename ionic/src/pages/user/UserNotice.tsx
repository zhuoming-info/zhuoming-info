import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';

const UserNotice: React.FC = () => {
  return (
    <IonPage>
      <Header title="通知" />
      <IonContent fullscreen>
        UserNotice
      </IonContent>
    </IonPage>
  );
};

export default UserNotice;