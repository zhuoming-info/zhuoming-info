import React, { useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton,
  IonButtons, IonSegment, IonSegmentButton, IonLabel, IonButton
} from '@ionic/react';
import ResponseTask from '../../components/response/ResponseTask'
import ResponseGroup from '../../components/response/ResponseGroup'
import ResponseMember from '../../components/response/ResponseMember'
import ResponseProduct from '../../components/response/ResponseProduct'
import ResponseFlow from '../../components/response/ResponseFlow'

const ResponseDetail: React.FC = () => {
  const [select, setSelect] = useState('task')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/response" text="返回"/>
          </IonButtons>
          <IonTitle>长江洪灾II级响应</IonTitle>
          <IonButtons slot="end">
            <IonButton>设置</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSegment value={select} onIonChange={e => setSelect(e.detail.value!)}>
          <IonSegmentButton value="task">
            <IonLabel>任务</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="group">
            <IonLabel>组别</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="member">
            <IonLabel>成员</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="product">
            <IonLabel>产品</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="flow">
            <IonLabel>流程</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent fullscreen>
        {select === 'task' && <ResponseTask />}
        {select === 'group' && <ResponseGroup />}
        {select === 'member' && <ResponseMember />}
        {select === 'product' && <ResponseProduct />}
        {select === 'flow' && <ResponseFlow />}
      </IonContent>
    </IonPage>
  );
};

export default ResponseDetail;
