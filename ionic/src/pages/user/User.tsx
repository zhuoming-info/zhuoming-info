import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonItem, IonAvatar, IonLabel, IonCardContent,
  IonButtons, IonButton, IonItemDivider, IonCardHeader, 
  IonCardTitle, IonCardSubtitle, IonImg
} from '@ionic/react';

const User: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>我的</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
              </IonAvatar>
              <IonLabel>faiyuching</IonLabel>
              <IonButtons>
                <IonButton color="primary" href={'/user/update'}>编辑个人资料</IonButton>
              </IonButtons>
            </IonItem>
            <IonItem lines="none">城市：杭州</IonItem>
            <IonItem lines="none">技能：开发</IonItem>
            <IonItem lines="none">石墨：faiyuching@gmail.com</IonItem>
          </IonCardContent>
        </IonCard>
        <IonItemDivider></IonItemDivider>
        <IonCard>
          <IonCardHeader>
            <IonCardHeader>
              <IonCardTitle>XXX响应｜XXX组长</IonCardTitle>
              <IonCardSubtitle>2020/12/14-2020/12/20</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              完成：XXX任务，XXX任务
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardHeader>
              <IonCardTitle>XXX响应｜XXX志愿者</IonCardTitle>
              <IonCardSubtitle>2020/12/14-2020/12/20</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              完成：XXX任务
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
