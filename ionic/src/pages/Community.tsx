import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const Community: React.FC = () => {
  return (
    <IonPage>
      <Header title="论坛" />
      <IonContent fullscreen>
        Community
      </IonContent>
    </IonPage>
  );
};

export default Community;



