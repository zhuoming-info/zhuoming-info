import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';

const UserTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="任务" />
      <IonContent fullscreen>
        UserTask
      </IonContent>
    </IonPage>
  );
};

export default UserTask;
