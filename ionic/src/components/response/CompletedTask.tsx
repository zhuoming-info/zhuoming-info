import React from "react";
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
} from '@ionic/react';
const CompletedTask: React.FC = () => {
  return (
    <IonCard routerLink="/response/task/123">
      <IonCardHeader>
        <IonCardTitle>任务标题</IonCardTitle>
        <IonCardSubtitle>任务截止时间｜需要人数</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        任务内容
      </IonCardContent>
    </IonCard>
  );
};

export default CompletedTask;