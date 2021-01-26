import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonItem, IonList, IonAvatar, IonLabel, IonImg, IonSegment,
  IonSegmentButton
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
      <IonContent>
        <IonList>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Poe</h2>
              <h3>New Ride</h3>
              <p>I just upgraded my X-Wing. Next time...</p>
            </IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Ben</h2>
              <h3>Move Along</h3>
              <p>These aren't the droids you're looking for...</p>
            </IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Leia</h2>
              <h3>You're My Only Hope</h3>
              <p>I've placed information vital to the survival...</p>
            </IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Yoda</h2>
              <h3>Size matters not</h3>
              <p>Do or do not. There is no try...</p>
            </IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Poe</h2>
              <h3>New Ride</h3>
              <p>I just upgraded my X-Wing. Next time...</p>
            </IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Ben</h2>
              <h3>Move Along</h3>
              <p>These aren't the droids you're looking for...</p>
            </IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Leia</h2>
              <h3>You're My Only Hope</h3>
              <p>I've placed information vital to the survival...</p>
            </IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Yoda</h2>
              <h3>Size matters not</h3>
              <p>Do or do not. There is no try...</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notice;
