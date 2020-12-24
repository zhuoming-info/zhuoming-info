import React from "react";
import { IonSplitPane, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import UserMenu from '../../components/user/UserMenu';
import Signin from '../Signin';

const UserTrash: React.FC = () => {

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
              <IonTitle>回收站</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            UserTrash
        </IonContent>
        </IonPage>
      </IonSplitPane>
    );
  }

};

export default UserTrash;