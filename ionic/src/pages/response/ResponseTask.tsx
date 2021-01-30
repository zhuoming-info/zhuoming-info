import React, { useState } from "react";
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonButton, IonSegment, IonSegmentButton
} from '@ionic/react';
import Content from '../../components/response/task/Content';
import Required from '../../components/response/task/Required';
import Steps from '../../components/response/task/Steps';

const ResponseTask: React.FC = () => {
  const [item, setItem] = useState('content')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/response" text="返回" />
          </IonButtons>
          <IonTitle>任务详情</IonTitle>
          <IonButtons slot="end">
            <IonButton>领取</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSegment value={item} onIonChange={e => setItem(e.detail.value!)}>
          <IonSegmentButton value="content">任务内容</IonSegmentButton>
          <IonSegmentButton value="required">任务要求</IonSegmentButton>
          <IonSegmentButton value="steps">任务步骤</IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        {item === "content" && <Content />}
        {item === "required" && <Required />}
        {item === "steps" && <Steps />}
      </IonContent>
    </IonPage>
  );
};

export default ResponseTask;
