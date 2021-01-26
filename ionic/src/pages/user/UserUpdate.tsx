import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonAvatar, IonLabel, IonButtons, IonButton,
  IonList, IonInput, IonGrid, IonRow, IonCol, IonBackButton, IonImg
} from '@ionic/react';

const UserUpdate: React.FC = () => {
  const [username, setUsername] = useState("faiyuching");
  const [city, setCity] = useState("杭州");
  const [skill, setSkill] = useState("开发");
  const [shimo, setShimo] = useState("faiyuching@gmail.com");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/user" text="取消" />
          </IonButtons>
          <IonTitle>编辑个人资料</IonTitle>
          <IonButtons slot="end">
            <IonButton color="medium">保存</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList>
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonImg src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
                  </IonAvatar>
                </IonItem>
                <IonItem>
                  <IonLabel position="fixed">用户名</IonLabel>
                  <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="fixed">城市</IonLabel>
                  <IonInput value={city} onIonChange={e => setCity(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="fixed">技能</IonLabel>
                  <IonInput value={skill} onIonChange={e => setSkill(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="fixed">石墨</IonLabel>
                  <IonInput value={shimo} onIonChange={e => setShimo(e.detail.value!)}></IonInput>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default UserUpdate;
