import { IonButtons, IonButton, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import React, { useContext } from "react";
import { Contexts } from "../util/Contexts"
import { personOutline } from 'ionicons/icons';

interface ContainerProps {
  title: string;
}

const HeaderLarge: React.FC<ContainerProps> = ({ title }) => {
  const ctx = useContext(Contexts);
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonTitle>卓明</IonTitle>
          <IonButton color="dark" routerLink={'/monitor'}>预测</IonButton>
          <IonButton color="dark" routerLink={'/response'}>响应</IonButton>
          <IonButton color="dark" routerLink={'/product'}>产品</IonButton>
          <IonButton color="dark" routerLink={'/community'}>论坛</IonButton>
          <IonButton color="dark" routerLink={'#'}>
            <IonIcon slot="start" icon={logoGithub} />参与开发
            </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          {ctx.user.id ? (
            <IonButton color="primary" routerLink={'/user'}>
              <IonIcon icon={personOutline} size="small" slot="start" />我的
            </IonButton>
          ) : <IonButton color="primary" routerLink={'/signup'}>登录｜注册</IonButton>}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderLarge;
