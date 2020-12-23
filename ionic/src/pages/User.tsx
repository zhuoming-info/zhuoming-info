import React from "react";
import { IonSplitPane, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';
import UserMenu from '../components/user/UserMenu'
import Signin from './Signin'

const User: React.FC = () => {

  if (!localStorage.getItem("userId")) {
    return (
      <Signin />
    )
  } else {
    return (
      <IonSplitPane contentId="main" when="lg">
        <UserMenu />
        <IonPage id="main">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle>我的</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            User
          </IonContent>
        </IonPage>
      </IonSplitPane>
    )
  }
};
export default User;