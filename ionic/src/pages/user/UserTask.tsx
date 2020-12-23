import React from "react";
import { IonSplitPane, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import UserMenu from '../../components/user/UserMenu'

const UserTask: React.FC = () => {
  return (
    <IonSplitPane contentId="main" when="lg">
      <UserMenu />
      <IonPage id="main">
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
      </IonPage>
    </IonSplitPane>
  );
};

export default UserTask;
