import React, { useContext } from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';
import { Contexts } from "../util/Contexts"

const Product: React.FC = () => {
  const ctx = useContext(Contexts);
  return (
    <IonPage>
      {ctx.deviceSize === "large" ? <HeaderLarge title="产品" /> : (
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

