import {
  IonContent, IonItem, IonList, IonMenu, IonHeader, IonToolbar,
  IonButtons, IonButton, IonBackButton
} from '@ionic/react';
import React from "react";

const ProductMenu: React.FC = () => {
  return (
    <IonMenu contentId="folder" type="overlay" side="start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonBackButton defaultHref="/product" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button>概述</IonItem>
          <IonItem button>监测组</IonItem>
          <IonItem button>信息组</IonItem>
          <IonItem button>产品组</IonItem>
          <IonItem button>行动组</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default ProductMenu;
