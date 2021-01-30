import {
  IonItem, IonList, IonAvatar, IonLabel, IonImg, IonListHeader,
  IonGrid, IonRow, IonCol, IonIcon
} from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';

const Member: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList>
            <IonListHeader>组长</IonListHeader>
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
            <IonItem button detailIcon="">
              <IonIcon icon={add} />
              <IonLabel>Add Member</IonLabel>
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
            <IonItem button detailIcon="">
              <IonIcon icon={add} />
              <IonLabel>Add Member</IonLabel>
            </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Member;
