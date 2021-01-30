import { IonCol, IonGrid, IonListHeader, IonRow, IonList } from '@ionic/react';
import React from 'react';

const Guide: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList>
            <IonListHeader>成员</IonListHeader>
          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Guide;
