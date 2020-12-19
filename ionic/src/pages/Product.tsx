import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
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
        Product
      </IonContent>
    </IonPage>
  );
};

export default Product;

