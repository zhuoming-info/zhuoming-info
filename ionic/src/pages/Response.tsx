import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';

const Response: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="response" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>响应</IonTitle>
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
              Response
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Response;
