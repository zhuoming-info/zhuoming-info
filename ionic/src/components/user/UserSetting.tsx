import {
  IonHeader, IonToolbar,
  IonContent, IonButtons, IonMenuButton, IonTitle,
  IonCard, IonList, IonItem, IonAvatar,
  IonLabel, IonCardTitle, IonCardSubtitle,
  IonGrid, IonRow, IonCol,
} from '@ionic/react';
import React from "react";

const UserSetting: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>设置</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonList>
            <IonItem>
              <IonAvatar slot="start">
                <img alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" />
              </IonAvatar>
              <IonLabel>
                <IonCardTitle>{localStorage.getItem("userId")}</IonCardTitle>
                <IonCardSubtitle>{localStorage.getItem("userId")}</IonCardSubtitle>
              </IonLabel>
            </IonItem>
            <IonItem color="light" lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size-lg="4" size-md="3" size-sm="2">
                    <IonCardSubtitle>用户名</IonCardSubtitle>
                  </IonCol>
                  <IonCol size-lg="8" size-md="9" size-sm="10">
                    <IonLabel className="ion-text-wrap">{localStorage.getItem("userId")}</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size-lg="4" size-md="3" size-sm="2">
                    <IonCardSubtitle>密码</IonCardSubtitle>
                  </IonCol>
                  <IonCol size-lg="8" size-md="9" size-sm="10">
                    <IonLabel className="ion-text-wrap">........</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem color="light" lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size-lg="4" size-md="3" size-sm="2">
                    <IonCardSubtitle>专业/技能</IonCardSubtitle>
                  </IonCol>
                  <IonCol size-lg="8" size-md="9" size-sm="10">
                    <IonLabel className="ion-text-wrap">{localStorage.getItem("userId")}</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size-lg="4" size-md="3" size-sm="2">
                    <IonCardSubtitle>一句话介绍</IonCardSubtitle>
                  </IonCol>
                  <IonCol size-lg="8" size-md="9" size-sm="10">
                    <IonLabel className="ion-text-wrap">{localStorage.getItem("userId")}</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem color="light" lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size-lg="4" size-md="3" size-sm="2">
                    <IonCardSubtitle>角色</IonCardSubtitle>
                  </IonCol>
                  <IonCol size-lg="8" size-md="9" size-sm="10">
                    <IonLabel className="ion-text-wrap">{localStorage.getItem("userId")}</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonList>
        </IonCard>
      </IonContent>
    </>
  );
};

export default UserSetting;
