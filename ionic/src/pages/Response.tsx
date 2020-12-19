import React, { useContext } from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';
import { Contexts } from "../util/Contexts"

const Response: React.FC = () => {
  const ctx = useContext(Contexts);
  return (
    <IonPage>
      {ctx.deviceSize === "large" ? <HeaderLarge title="响应" /> : (
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
