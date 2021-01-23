import React from "react";
import {
  IonSplitPane, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton,
  IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonCard, IonListHeader,
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonLabel
} from '@ionic/react';
import UserMenu from '../../components/user/UserMenu'
import Signin from '../Signin'

const User: React.FC = () => {

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
              <IonTitle>我的</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonList>
              <IonListHeader>任务</IonListHeader>
              <IonItem>
                <IonLabel>
                  <h2>Poe</h2>
                  <h3>New Ride</h3>
                  <p>I just upgraded my X-Wing. Next time...</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Ben</h2>
                  <h3>Move Along</h3>
                  <p>These aren't the droids you're looking for...</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Leia</h2>
                  <h3>You're My Only Hope</h3>
                  <p>I've placed information vital to the survival...</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Yoda</h2>
                  <h3>Size matters not</h3>
                  <p>Do or do not. There is no try...</p>
                </IonLabel>
              </IonItem>
              <IonListHeader>通知</IonListHeader>
              <IonItem>
                <IonLabel>
                  <h2>Finn</h2>
                  <h3>I'm a big deal</h3>
                  <p>Listen, I've had a pretty messed up day...</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Han</h2>
                  <h3>Look, kid...</h3>
                  <p>I've got enough on my plate as it is, and I...</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Rey</h2>
                  <h3>I can handle myself</h3>
                  <p>You will remove these restraints and leave...</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Luke</h2>
                  <h3>Your thoughts betray you</h3>
                  <p>I feel the good in you, the conflict...</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    )
  }
};
export default User;