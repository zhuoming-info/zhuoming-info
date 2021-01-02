import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonItem, IonThumbnail, IonLabel, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import HeaderLarge from '../components/HeaderLarge';

const Product: React.FC = () => {
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="product" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>产品</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol
              size-xs="12"
              size-sm="10"
              size-md="8"
              size-lg="6"
              style={{ margin: "0 auto" }}>
              <IonItem>
                <IonThumbnail slot="start">
                  <IonImg src="/assets/product/folder.svg" />
                </IonThumbnail>
                <IonLabel>
                  <h3>长江II级洪灾响应</h3>
                  <p>2020/12/13 23:10</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Product;

