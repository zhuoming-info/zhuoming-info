import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
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
        <IonGrid>
          <IonRow>
            <IonCol
              size-xs="12"
              size-sm="10"
              size-md="8"
              size-lg="6"
              style={{ margin: "0 auto" }}>
              <JiangxiCover />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Monitor;


