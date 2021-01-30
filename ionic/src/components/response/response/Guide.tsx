import { IonItem, IonAvatar, IonLabel, IonImg, IonList } from '@ionic/react';
import React from 'react';

const Guide: React.FC = () => {
  return (
    <IonList>
      <IonItem button detailIcon="">
        <IonAvatar slot="start">
          <IonImg src="/assets/library/050-file.svg" />
        </IonAvatar>
        <IonLabel>
          <h3>协作流程</h3>
          <p>2020/12/13 23:10</p>
        </IonLabel>
      </IonItem>
      <IonItem button detailIcon="">
        <IonAvatar slot="start">
          <IonImg src="/assets/library/050-file.svg" />
        </IonAvatar>
        <IonLabel>
          <h3>预备知识</h3>
          <p>2020/12/13 23:10</p>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};

export default Guide;
