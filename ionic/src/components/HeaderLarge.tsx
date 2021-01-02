import { IonButtons, IonButton, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import React from "react";
import { personOutline } from 'ionicons/icons';

interface ContainerProps {
  title: string;
}

const HeaderLarge: React.FC<ContainerProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonTitle>卓明</IonTitle>
          <IonButton color={title === "监测" ? "primary" : "dark"} routerLink={'/monitor'}>监测</IonButton>
          <IonButton color={title === "响应" ? "primary" : "dark"} routerLink={'/response'}>响应</IonButton>
          <IonButton color={title === "产品" ? "primary" : "dark"} routerLink={'/product'}>产品</IonButton>
          <IonButton color={title === "论坛" ? "primary" : "dark"} routerLink={'/forum'}>论坛</IonButton>
          <IonButton color="dark" target="_blank" href="https://zhuoming-info.github.io/">
            <IonIcon slot="start" icon={logoGithub} />参与开发
            </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          {localStorage.getItem("userId") ? (
            <IonButton color="primary" routerLink={'/user'}>
              <IonIcon icon={personOutline} size="small" slot="start" />个人中心
            </IonButton>
          ) : <IonButton color="primary" routerLink={'/signup'}>登录｜注册</IonButton>}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderLarge;
