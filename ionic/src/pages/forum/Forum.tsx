import React, { useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar, IonTitle,
  IonButtons, IonButton, IonCard, IonItem, IonAvatar, IonLabel, IonCardContent,
  IonBadge, IonIcon, IonSegment, IonSegmentButton, IonImg
} from '@ionic/react';
import { heartOutline, chatbubblesOutline } from 'ionicons/icons';

const Forum: React.FC = () => {
  const [select, setSelect] = useState('response')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>论坛</IonTitle>
          <IonButtons slot="end">
            <IonButton>发帖</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSegment value={select} onIonChange={e => setSelect(e.detail.value!)}>
          <IonSegmentButton value="response">正在响应</IonSegmentButton>
          <IonSegmentButton value="all">全部</IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        <IonCard button>
          <IonItem lines="none">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>faiyuqing</h2>
              <p>2020/09/12</p>
            </IonLabel>
          </IonItem>
          <IonCardContent>
            冬季的莫斯科由于燃气没有得到及时的供应，很多居民都开始抱怨一周供暖的时间不足。三个平民在一起讨论这个事情。第一个人说：如果我是党的干部就好了，一周里，家里暖气能供应5天，每天16个小时。这时第二个人说：如果我是东德人就好了，家里暖气每周能供应6天，每天20个小时。第三......
          </IonCardContent>
          <IonItem lines="none">
            <IonBadge color="light">#标签</IonBadge>
            <IonButtons slot="end">
              <IonButton color="medium">
                <IonIcon icon={heartOutline}></IonIcon>9
              </IonButton>
              <IonButton color="medium">
                <IonIcon icon={chatbubblesOutline}></IonIcon>4
              </IonButton>
            </IonButtons>
          </IonItem>
        </IonCard>
        <IonCard button>
          <IonItem lines="none">
            <IonAvatar slot="start">
              <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
            </IonAvatar>
            <IonLabel>
              <h2>faiyuqing</h2>
              <p>2020/09/12</p>
            </IonLabel>
          </IonItem>
          <IonCardContent>
            冬季的莫斯科由于燃气没有得到及时的供应，很多居民都开始抱怨一周供暖的时间不足。三个平民在一起讨论这个事情。第一个人说：如果我是党的干部就好了，一周里，家里暖气能供应5天，每天16个小时。这时第二个人说：如果我是东德人就好了，家里暖气每周能供应6天，每天20个小时。第三......
          </IonCardContent>
          <IonItem lines="none">
            <IonBadge color="light">#标签</IonBadge>
            <IonButtons slot="end">
              <IonButton color="medium">
                <IonIcon icon={heartOutline}></IonIcon>9
                  </IonButton>
              <IonButton color="medium">
                <IonIcon icon={chatbubblesOutline}></IonIcon>4
                    </IonButton>
            </IonButtons>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Forum;



