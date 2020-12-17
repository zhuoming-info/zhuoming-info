import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const Response: React.FC = () => {
  return (
    <IonPage>
      <Header title="响应" />
      <IonContent fullscreen>
        Response
      </IonContent>
    </IonPage>
  );
};

export default Response;
