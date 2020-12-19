import React, { useContext } from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';
import { Contexts } from "../util/Contexts"

const Community: React.FC = () => {
  const ctx = useContext(Contexts);
  return (
    <IonPage>
      {ctx.deviceSize === "large" ? <HeaderLarge title="论坛" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>论坛</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        Community
      </IonContent>
    </IonPage>
  );
};

export default Community;



