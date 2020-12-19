import { IonButtons, IonButton, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import React, { useContext } from "react";
import { Contexts } from "../util/Contexts"

interface ContainerProps {
  title: string;
}

const Header: React.FC<ContainerProps> = ({ title }) => {
  const ctx = useContext(Contexts);
  return (
    <IonHeader>
      <IonToolbar>
        {ctx.deviceSize === "large" && window.location.pathname.split("/")[1] !== "user" && (
          <IonButtons slot="start">
            <IonTitle>卓明</IonTitle>
            <IonButton color="dark" href={'/monitor'}>预测</IonButton>
            <IonButton color="dark" href={'/response'}>响应</IonButton>
            <IonButton color="dark" href={'/product'}>产品</IonButton>
            <IonButton color="dark" href={'/community'}>论坛</IonButton>
            <IonButton color="dark" href={'#'}>
              <IonIcon slot="start" icon={logoGithub} />参与开发
            </IonButton>
          </IonButtons>
        )}
        {(ctx.deviceSize === "small" || window.location.pathname.split("/")[1] === "user") && <IonTitle>{title}</IonTitle>}
        <IonButtons slot="end">
          {ctx.currentUser.id && <IonMenuButton />}
          {!ctx.currentUser.id && window.location.pathname.split("/")[1] !== "user" && <IonButton color="primary" routerLink={'/signup'}>登录｜注册</IonButton>}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
