import React from "react";
import { IonSplitPane, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import UserMenu from '../../components/user/UserMenu'

const UserNotice: React.FC = () => {
  return (
    <IonSplitPane contentId="main" when="lg">
      <UserMenu />
      <IonPage id="main">
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
      </IonPage>
    </IonSplitPane>
  );
};

export default UserNotice;