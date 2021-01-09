import React from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonButton, IonMenuButton, IonSplitPane, IonGrid, IonRow, IonCol
} from '@ionic/react';
import DocumentMenu from '../../components/document/DocumentMenu';

const Folder: React.FC = () => {
  return (
    <IonSplitPane contentId="folder" when="lg">
      <DocumentMenu />
      <IonPage id="folder">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>参与开发指南</IonTitle>
            <IonButtons slot="end">
              <IonButton>编辑</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
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

export default Folder;

