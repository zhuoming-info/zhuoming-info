import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';

const Content: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          任务内容
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Content;
