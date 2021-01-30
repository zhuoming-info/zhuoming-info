import React, { useState } from "react";
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSelect, IonSelectOption, IonButtons, IonButton,
  IonSegment, IonSegmentButton
} from '@ionic/react';
import Guide from "../../components/response/response/Guide";
import Task from "../../components/response/response/Task";
import Member from "../../components/response/response/Member";

const ResponseDetail: React.FC = () => {
  const [group, setGroup] = useState('all')
  const [item, setItem] = useState('task')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>响应名称</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonSelect slot="end" interface="popover" value={group} onIonChange={e => setGroup(e.detail.value)}>
                <IonSelectOption value="all">所有组</IonSelectOption>
                <IonSelectOption value="monitor">监测组</IonSelectOption>
                <IonSelectOption value="info">信息组</IonSelectOption>
                <IonSelectOption value="action">行动组</IonSelectOption>
                <IonSelectOption value="product">产品组</IonSelectOption>
              </IonSelect>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSegment value={item} onIonChange={e => setItem(e.detail.value!)}>
          <IonSegmentButton value="guide">指南</IonSegmentButton>
          <IonSegmentButton value="task">任务</IonSegmentButton>
          <IonSegmentButton value="member">成员</IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        {item === "guide" && <Guide />}
        {item === "task" && <Task />}
        {item === "member" && <Member />}
      </IonContent>
    </IonPage>
  );
};

export default ResponseDetail;
