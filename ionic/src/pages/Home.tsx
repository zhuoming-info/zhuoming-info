import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
// import axios from 'axios';

const Home: React.FC = () => {
  // useEffect(() => {
  //   axios.get('https://www.zhuominginfo.org/api/user/5fd7aae0d83e2b0018d00001')
  //   .then(function (res){
  //     console.log(res.data)
  //   })
  // }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
