import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';

const Response: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="响应" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>响应</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        Response
      </IonContent>
    </IonPage>
  );
};

export default Response;
