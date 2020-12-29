import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonItem, IonThumbnail, IonLabel, IonImg } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';

const Product: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="产品" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>产品</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <IonItem>
          <IonThumbnail slot="start">
            <IonImg src="/assets/product/folder.svg" />
          </IonThumbnail>
          <IonLabel>
            <h3>长江II级洪灾响应</h3>
            <p>2020/12/13 23:10</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Product;

