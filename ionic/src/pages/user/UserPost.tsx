import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header';

const UserPost: React.FC = () => {
  return (
    <IonPage>
      <Header title="帖子" />
      <IonContent fullscreen>
        UserPost
      </IonContent>
    </IonPage>
  );
};

export default UserPost;