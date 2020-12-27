import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';
import JiangxiCover from '../components/monitor/jiangxi/JiangxiCover';

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
        <JiangxiCover />
      </IonContent>
    </IonPage>
  );
};

export default Monitor;


