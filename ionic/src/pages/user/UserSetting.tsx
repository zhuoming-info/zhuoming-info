import {
  IonHeader, IonToolbar, IonPage, IonSplitPane,
  IonContent, IonButtons, IonMenuButton, IonTitle,
  IonList, IonItem, IonAvatar,
  IonLabel, IonCardSubtitle,
  IonPopover, IonInput, IonButton, IonListHeader
} from '@ionic/react';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserMenu from '../../components/user/UserMenu';

const UserSetting: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
    key: "",
    value: "",
    name: ""
  });
  const [userInfo, setUserInfo] = useState({
    avatar: "",
    username: "",
    email: "",
    skill: "",
    intro: ""
  })
  const userId = localStorage.getItem('userId')
  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(function (res) {
        setUserInfo(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId])
  return (
    <IonSplitPane contentId="main" when="lg">
      <UserMenu />
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton />
            </IonButtons>
            <IonTitle>设置</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonPopover
            cssClass='my-custom-class'
            event={popoverState.event}
            isOpen={popoverState.showPopover}
            onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined, key: "", value: "", name: "" })}
          >
            <>
              {popoverState.key === "password" && (
                <IonItem>
                  <IonLabel position="floating">原密码：</IonLabel>
                  <IonInput placeholder=". . . . . ."></IonInput>
                </IonItem>
              )}
              <IonItem>
                <IonLabel position="floating">修改{popoverState.name}：</IonLabel>
                <IonInput placeholder={popoverState.value}></IonInput>
              </IonItem>
              <IonItem>
                <IonButtons slot="start">
                  <IonButton>取消</IonButton>
                </IonButtons>
                <IonButtons slot="end">
                  <IonButton>确定</IonButton>
                </IonButtons>
              </IonItem>
            </>
          </IonPopover>
          <IonList>
            <IonListHeader>个人信息</IonListHeader>
            <IonItem button onClick={() => setShowPopover({ showPopover: true, event: undefined, key: "avatar", value: `${userInfo.avatar}`, name: "头像链接" })}>
              <IonCardSubtitle>头像</IonCardSubtitle>
              <IonAvatar slot="end">
                <img alt="avatar" src={userInfo.avatar} />
              </IonAvatar>
            </IonItem>
            <IonItem button onClick={() => setShowPopover({ showPopover: true, event: undefined, key: "email", value: `${userInfo.email}`, name: "邮箱" })}>
              <IonCardSubtitle>邮箱</IonCardSubtitle>
              <IonLabel slot="end">{userInfo.email}</IonLabel>
            </IonItem>
            <IonItem button onClick={() => setShowPopover({ showPopover: true, event: undefined, key: "username", value: `${userInfo.username}`, name: "用户名" })}>
              <IonCardSubtitle>用户名</IonCardSubtitle>
              <IonLabel slot="end">{userInfo.username}</IonLabel>
            </IonItem>
            <IonItem button onClick={() => setShowPopover({ showPopover: true, event: undefined, key: "password", value: `${userInfo.username}`, name: "密码" })}>
              <IonCardSubtitle>密码</IonCardSubtitle>
              <IonLabel slot="end">........</IonLabel>
            </IonItem>
            <IonItem button onClick={() => setShowPopover({ showPopover: true, event: undefined, key: "skill", value: `${userInfo.skill}`, name: "专业/技能" })}>
              <IonCardSubtitle>专业/技能</IonCardSubtitle>
              <IonLabel slot="end">{userInfo.skill}</IonLabel>
            </IonItem>
            <IonItem button onClick={() => setShowPopover({ showPopover: true, event: undefined, key: "intro", value: `${userInfo.intro}`, name: "介绍" })}>
              <IonCardSubtitle>介绍</IonCardSubtitle>
              <IonLabel slot="end">{userInfo.intro}</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default UserSetting;
