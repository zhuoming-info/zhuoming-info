import React from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonButton
} from '@ionic/react';
import HeaderLarge from '../../components/HeaderLarge';

const Response: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="response" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>响应</IonTitle>
            <IonButtons slot="end">
              <IonButton>发起响应</IonButton>
            </IonButtons>
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
              <IonCard>
                <IonCardContent>当前暂无正在进行中的响应</IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>长江II级响应</IonCardTitle>
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Response;
