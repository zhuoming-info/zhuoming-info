import React from "react";
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonButton
} from '@ionic/react';

const ResponseTask: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/response" text="返回" />
          </IonButtons>
          <IonTitle>任务详情</IonTitle>
          <IonButtons slot="end">
            <IonButton>领取</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        任务详情
      </IonContent>
    </IonPage>
  );
};

export default ResponseTask;
