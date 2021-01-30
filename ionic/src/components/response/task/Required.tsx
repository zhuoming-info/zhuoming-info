import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';

const Required: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          任务需要
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Required;
