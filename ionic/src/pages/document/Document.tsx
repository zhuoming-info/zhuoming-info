import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonItem, IonThumbnail, IonLabel, IonImg, IonGrid, IonRow, IonCol, IonButtons, IonButton } from '@ionic/react';
import HeaderLarge from '../../components/HeaderLarge';

const Document: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="document" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>文档</IonTitle>
            <IonButtons slot="end">
              <IonButton>新建</IonButton>
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
              <IonItem button href={'/document/folder/123'}>
                <IonThumbnail slot="start">
                  <IonImg src="/assets/document/folder.svg" />
                </IonThumbnail>
                <IonLabel>
                  <h3>（示例）开发者文档</h3>
                  <p>2020/12/13 23:10</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Document;

