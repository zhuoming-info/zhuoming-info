import React from "react";
import { IonSplitPane, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import UserMenu from '../../components/user/UserMenu';
import Signin from '../Signin';

const UserFavorite: React.FC = () => {

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
              <IonTitle>收藏</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            UserFavorite
        </IonContent>
        </IonPage>
      </IonSplitPane>
    );
  }

};

export default UserFavorite;