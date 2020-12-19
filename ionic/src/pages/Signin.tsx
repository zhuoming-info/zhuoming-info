import {
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonContent,
  IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonBackButton, IonIcon
} from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';
import React, { useState, useContext } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Contexts } from "../util/Contexts"

const Signin: React.FC = () => {
  const ctx = useContext(Contexts);
  const [login, setLogin] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    axios.post('/api/user/signin', { email, password })
      .then(function (res) {
        ctx.user = res.data
        setLogin(true)
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  if (login) {
    return (
      <Redirect to="/" />
    )
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>登录</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol
                size-xs="12"
                size-sm="10"
                size-md="8"
                size-lg="6"
                style={{ margin: "0 auto" }}
              >
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>卓明</IonCardTitle>
                    <IonCardSubtitle>登录</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonItem>
                      <IonLabel position="floating">邮箱</IonLabel>
                      <IonInput
                        type="email"
                        name="email"
                        onIonChange={(e) => {
                          setEmail(e.detail.value!);
                        }}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">密码</IonLabel>
                      <IonInput
                        type="password"
                        name="password"
                        onIonChange={(e) => {
                          setPassword(e.detail.value!);
                        }}
                      ></IonInput>
                    </IonItem>
                    <br />
                    <IonButton onClick={onSubmit}>登录</IonButton>
                    <IonButton fill="clear" routerLink={'/signup'}>
                      注册 <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    )
  }
};

export default Signin;
