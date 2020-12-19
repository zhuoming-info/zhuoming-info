import React, { useContext } from "react";
import { Redirect } from 'react-router-dom';
import { IonSplitPane, IonPage } from '@ionic/react';
import { Contexts } from "../util/Contexts"
import queryString from 'query-string'
import UserMenu from '../components/user/UserMenu'
import UserFavorite from '../components/user/UserFavorite'
import UserNotice from '../components/user/UserNotice'
import UserPost from '../components/user/UserPost'
import UserSetting from '../components/user/UserSetting'
import UserTask from '../components/user/UserTask'
import UserTrash from '../components/user/UserTrash'

const User: React.FC = () => {
  const ctx = useContext(Contexts);
  const type = queryString.parse(window.location.search).type

  if (!ctx.user.id) {
    return (
      <Redirect to="/signin" />
    )
  } else {
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
  }

};
export default User;