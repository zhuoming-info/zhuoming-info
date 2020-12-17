import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';

const UserTrash: React.FC = () => {
  return (
    <IonPage>
      <Header title="回收站" />
      <IonContent fullscreen>
        UserTrash
      </IonContent>
    </IonPage>
  );
};

export default UserTrash;