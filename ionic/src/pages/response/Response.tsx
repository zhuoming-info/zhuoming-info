import React from "react";
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,
  IonCardContent, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonButtons, IonButton
} from '@ionic/react';

const Response: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>响应</IonTitle>
          <IonButtons slot="end">
            <IonButton>发起响应</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>当前暂无正在进行中的响应</IonCardContent>
        </IonCard>
        <IonCard routerLink={'/response/123'}>
          <IonCardHeader>
            <IonCardTitle>长江洪灾II级响应</IonCardTitle>
            <IonCardSubtitle>2020/6/20 - 2020/7/20</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            2020年中国洪灾及次生灾害损失一览
                </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>NCP生命支援</IonCardTitle>
            <IonCardSubtitle>2020/2/2 - 2020/4/4</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );

};

export default Response;
