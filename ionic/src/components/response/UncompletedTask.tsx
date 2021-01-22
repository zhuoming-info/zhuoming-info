import React from "react";
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
} from '@ionic/react';
const UncompletedTask: React.FC = () => {
  return (
    <IonCard routerLink="/response/task/123">
      <IonCardHeader>
        <IonCardTitle>灾害信息员</IonCardTitle>
        <IonCardSubtitle>截止：2020/7/9 23:59｜需要：10人</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        搜集抖音/微博上的灾情信息，按照模版提交
      </IonCardContent>
    </IonCard>
  );
};

export default UncompletedTask;