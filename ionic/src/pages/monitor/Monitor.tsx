import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import HeaderLarge from '../../components/HeaderLarge';
import JiangxiRiverWarning from '../../components/monitor/JiangxiRiverWarningCover';

const Monitor: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="monitor" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>工具</IonTitle>
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
              <JiangxiRiverWarning />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Monitor;


