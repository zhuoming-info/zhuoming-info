import { IonItem, IonList, IonAvatar, IonLabel, IonImg, IonListHeader } from '@ionic/react';
import React from 'react';

const Member: React.FC = () => {
  return (
    <IonList>
      <IonListHeader>组长</IonListHeader>
      <IonItem button routerLink={'/user'}>
        <IonAvatar slot="start">
          <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
        </IonAvatar>
        <IonLabel>faiyuching（组长）</IonLabel>
      </IonItem>
      <IonListHeader>组员</IonListHeader>
      <IonItem button routerLink={'/user'}>
        <IonAvatar slot="start">
          <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
        </IonAvatar>
        <IonLabel>faiyuching</IonLabel>
      </IonItem>
      <IonItem button routerLink={'/user'}>
        <IonAvatar slot="start">
          <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
        </IonAvatar>
        <IonLabel>faiyuching</IonLabel>
      </IonItem>
      <IonItem button routerLink={'/user'}>
        <IonAvatar slot="start">
          <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
        </IonAvatar>
        <IonLabel>faiyuching</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default Member;
