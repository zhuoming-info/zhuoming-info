import React from 'react';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol
} from '@ionic/react';

const Task: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonCard routerLink="/response/task/123">
            <IonCardHeader>
              <IonCardTitle>灾害信息员</IonCardTitle>
              <IonCardSubtitle>组别：信息组｜需要：10人</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              搜集抖音/微博上的灾情信息，按照模版提交
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Task;
