import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonItem, IonList, IonLabel, IonSegment, IonSegmentButton,
  IonItemSliding, IonItemOptions, IonItemOption, IonNote, IonAvatar, IonImg
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
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log('unread clicked')}>置顶</IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="/assets/notice/notice.png" />
              </IonAvatar>
              <IonLabel>
                <h3>系统通知</h3>
                <p>A new message in your network...</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="medium">
                归档
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log('unread clicked')}>置顶</IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
              </IonAvatar>
              <IonLabel>
                <h3>会议通知</h3>
                <p>A new message in your network...</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="medium">
                归档
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log('unread clicked')}>置顶</IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="/assets/notice/task.png" />
              </IonAvatar>
              <IonLabel>
                <h3>任务通知</h3>
                <p>A new message in your network...</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="medium">
                归档
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log('unread clicked')}>置顶</IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="/assets/notice/group.png" />
              </IonAvatar>
              <IonLabel>
                <h3>信息组</h3>
                <p>A new message in your network...</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="medium">
                归档
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log('unread clicked')}>置顶</IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="/assets/notice/group.png" />
              </IonAvatar>
              <IonLabel>
                <h3>产品组</h3>
                <p>A new message in your network...</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="medium">
                归档
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log('unread clicked')}>置顶</IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
              </IonAvatar>
              <IonLabel>
                <h3>faiyuching</h3>
                <p>A new message in your network...</p>
              </IonLabel>
              <IonNote slot="end">
                10:45 AM
              </IonNote>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="medium">
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
