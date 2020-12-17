import { IonButtons, IonButton, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from "react";
import { Contexts } from "../util/Contexts"

interface ContainerProps {
  title: string;
}

const Header: React.FC<ContainerProps> = ({title}) => {
  const ctx = useContext(Contexts);
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="end">
          {ctx.user.id ? <IonMenuButton /> : <IonButton color="primary" routerLink={'/user/signup'}>登录｜注册</IonButton>}
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
