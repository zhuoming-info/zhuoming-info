import {
  IonContent, IonItem, IonList, IonMenu, IonHeader, IonToolbar,
  IonButtons, IonButton, IonBackButton
} from '@ionic/react';
import React from "react";

const DocumentMenu: React.FC = () => {
  return (
    <IonMenu contentId="folder" type="overlay" side="start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonBackButton defaultHref="/document" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button>概述</IonItem>
          <IonItem button>微服务架构</IonItem>
          <IonItem button>使用的技术</IonItem>
          <IonItem button>环境搭建</IonItem>
          <IonItem button>如何开发一个完全独立的服务</IonItem>
          <IonItem button>如何开发与其他服务交互的服务</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default DocumentMenu;
