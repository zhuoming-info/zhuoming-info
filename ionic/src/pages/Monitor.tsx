import React, { useContext } from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';
import { Contexts } from "../util/Contexts"

const Monitor: React.FC = () => {
  const ctx = useContext(Contexts);
  return (
    <IonPage>
      {ctx.deviceSize === "large" ? <HeaderLarge title="监测" /> : (
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


