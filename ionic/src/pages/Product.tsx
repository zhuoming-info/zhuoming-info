import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const Product: React.FC = () => {
  return (
    <IonPage>
      <Header title="产品" />
      <IonContent fullscreen>
        Product
      </IonContent>
    </IonPage>
  );
};

export default Product;

