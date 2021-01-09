import React from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonButton, IonMenuButton, IonSplitPane
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
            <IonTitle>概述</IonTitle>
            <IonButtons slot="end">
              <IonButton>编辑</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          content
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Folder;

