import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonButtons, IonButton,
  IonItem, IonPopover, IonLabel
} from '@ionic/react';
import All from '../../components/library/All';
import Learn from '../../components/library/Learn';
import Response from '../../components/library/Response';
import Template from '../../components/library/Template';

const Library: React.FC = () => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [select, setSelect] = useState('all')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>资料库</IonTitle>
          <IonButtons slot="end">
            <IonPopover
              cssClass='my-custom-class'
              event={popoverState.event}
              isOpen={popoverState.showPopover}
              onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
            >
              <IonItem button>文件夹</IonItem>
              <IonItem button>文件</IonItem>
              <IonItem button>音频</IonItem>
              <IonItem button>视频</IonItem>
              <IonItem button detailIcon="" lines="none" onClick={() => setShowPopover({ showPopover: false, event: undefined })}>
                <IonLabel color="danger">取消</IonLabel>
              </IonItem>
            </IonPopover>
            <IonButton onClick={(e: any) => { e.persist(); setShowPopover({ showPopover: true, event: e }) }}>
              新建
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSegment value={select} onIonChange={e => setSelect(e.detail.value!)}>
          <IonSegmentButton value="all">全部</IonSegmentButton>
          <IonSegmentButton value="learn">学习资料</IonSegmentButton>
          <IonSegmentButton value="response">响应文档</IonSegmentButton>
          <IonSegmentButton value="template">模版</IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        {select === "all" && <All />}
        {select === "learn" && <Learn />}
        {select === "response" && <Response />}
        {select === "template" && <Template />}
      </IonContent>
    </IonPage>
  );
};

export default Library;
