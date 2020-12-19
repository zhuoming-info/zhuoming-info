import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';

const Monitor: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="监测" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>监测</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        Monitor
      </IonContent>
    </IonPage>
  );
};

export default Monitor;


