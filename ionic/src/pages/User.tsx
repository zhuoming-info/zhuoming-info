import React from "react";
import { IonSplitPane, IonPage } from '@ionic/react';
import queryString from 'query-string'
import UserMenu from '../components/user/UserMenu'
import UserFavorite from '../components/user/UserFavorite'
import UserNotice from '../components/user/UserNotice'
import UserPost from '../components/user/UserPost'
import UserSetting from '../components/user/UserSetting'
import UserTask from '../components/user/UserTask'
import UserTrash from '../components/user/UserTrash'

const User: React.FC = () => {
  const type = queryString.parse(window.location.search).type

  if (!localStorage.getItem("userId")) {
    window.location.href = "/signin"
  }

  return (
    <IonSplitPane contentId="main" when="lg">
      <UserMenu />
      <IonPage id="main">
        {type === undefined && <UserTask />}
        {type === "favorite" && <UserFavorite />}
        {type === "notice" && <UserNotice />}
        {type === "post" && <UserPost />}
        {type === "setting" && <UserSetting />}
        {type === "task" && <UserTask />}
        {type === "trash" && <UserTrash />}
      </IonPage>
    </IonSplitPane>
  )

};
export default User;