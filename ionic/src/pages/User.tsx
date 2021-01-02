import React from "react";
import { IonSplitPane, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
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
            <IonGrid>
              <IonRow>
                <IonCol
                  size-xs="12"
                  size-sm="10"
                  size-md="8"
                  size-lg="6"
                  style={{ margin: "0 auto" }}>
                  User
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    )
  }
};
export default User;