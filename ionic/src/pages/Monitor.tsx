import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const Monitor: React.FC = () => {
  return (
    <IonPage>
      <Header title="监测" />
      <IonContent fullscreen>
        Monitor
      </IonContent>
    </IonPage>
  );
};

export default Monitor;


