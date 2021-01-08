import React from "react";
import { IonSplitPane, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import UserMenu from '../../components/user/UserMenu';
import Signin from '../Signin';

const UserNotice: React.FC = () => {

  if (!localStorage.getItem("userId")) {
    return (
      <Signin />
    )
  } else {
    return (
      <IonSplitPane contentId="user" when="lg">
        <UserMenu />
        <IonPage id="user">
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
  }


};

export default UserNotice;