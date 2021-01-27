import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonItem, IonList, IonLabel, IonSegment, IonSegmentButton,
  IonItemSliding, IonItemOptions, IonItemOption, IonNote
} from '@ionic/react';

const Notice: React.FC = () => {
  const [select, setSelect] = useState('response')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>通知</IonTitle>
          <IonButtons slot="end">
            <IonButton>发布</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSegment value={select} onIonChange={e => setSelect(e.detail.value!)}>
          <IonSegmentButton value="response">正在响应</IonSegmentButton>
          <IonSegmentButton value="all">全部</IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log('unread clicked')}>置顶</IonItemOption>
            </IonItemOptions>
            <IonItem href="#">
              <IonLabel>
                <h2>HubStruck Notifications</h2>
                <p>A new message in your network</p>
                <p>Oceanic Next has joined your network</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="success">
                归档
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notice;
