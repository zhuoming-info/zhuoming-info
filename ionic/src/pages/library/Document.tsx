import React from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonButton, IonMenuButton, IonSplitPane, IonGrid, IonRow, IonCol
} from '@ionic/react';
import DocumentMenu from '../../components/library/DocumentMenu';

const Document: React.FC = () => {
  return (
    <IonSplitPane contentId="document" when="lg">
      <DocumentMenu />
      <IonPage id="document">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>开发者文档</IonTitle>
            <IonButtons slot="end">
              <IonButton>编辑</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                toc
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Document;

