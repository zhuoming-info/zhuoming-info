import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

const JiangxiCover: React.FC = () => {
  return (
    <IonCard routerLink="/monitor/jiangxi" disabled>
      <IonCardHeader>
        <IonCardTitle>江西省水雨情</IonCardTitle>
        <IonCardSubtitle>正在开发......</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>

      </IonCardContent>
    </IonCard>
  );
};

export default JiangxiCover;


