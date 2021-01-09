import {
  IonContent, IonItem, IonList, IonMenu, IonHeader, IonToolbar,
  IonButtons, IonTitle, IonBackButton
} from '@ionic/react';
import React from "react";

const DocumentMenu: React.FC = () => {
  return (
    <IonMenu contentId="folder" type="reveal" side="start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {localStorage.getItem("deviceSize") === "large" && <IonBackButton defaultHref="/document" />}
          </IonButtons>
          <IonTitle>目录</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button>概述</IonItem>
          <IonItem button>微服务架构</IonItem>
          <IonItem button>使用的技术</IonItem>
          <IonItem button>环境搭建</IonItem>
          <IonItem button>如何开发一个完全独立的服务</IonItem>
          <IonItem button>如何开发一个不完全独立的服务</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default DocumentMenu;
