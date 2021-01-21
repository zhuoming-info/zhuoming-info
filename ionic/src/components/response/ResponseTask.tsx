import React, { useState } from "react";
import {
  IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton
} from '@ionic/react';
import UncompletedTask from './UncompletedTask'
import CompletedTask from './CompletedTask'
const ResponseTask: React.FC = () => {
  const [select, setSelect] = useState('uncompleted')
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonSegment value={select} onIonChange={e => setSelect(e.detail.value!)}>
            <IonSegmentButton value="uncompleted">未完成</IonSegmentButton>
            <IonSegmentButton value="completed">已完成</IonSegmentButton>
          </IonSegment>
          {select === 'uncompleted' && <UncompletedTask />}
          {select === 'completed' && <CompletedTask />}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ResponseTask;