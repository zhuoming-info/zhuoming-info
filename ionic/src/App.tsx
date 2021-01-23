import React from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs, IonTabBar,
  IonTabButton, IonIcon,
  IonLabel
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { hammerOutline, volumeHighOutline, folderOutline, chatbubblesOutline, personOutline } from 'ionicons/icons';

import Response from './pages/response/Response';
import ResponseDetail from './pages/response/ResponseDetail';
import TaskDetail from './pages/response/TaskDetail';

import Document from './pages/document/Document';
import Folder from './pages/document/Folder';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import User from './pages/user/User';
import UserFavorite from './pages/user/UserFavorite';
import UserNotice from './pages/user/UserNotice';
import UserPost from './pages/user/UserPost';
import UserSetting from './pages/user/UserSetting';
import UserTask from './pages/user/UserTask';
import UserTrash from './pages/user/UserTrash';

import Forum from './pages/forum/Forum';
import NewPost from './pages/forum/NewPost';
import Post from './pages/forum/Post';
import UpdatePost from './pages/forum/UpdatePost';

import Monitor from './pages/monitor/Monitor';
import JiangxiRiverWarning from './pages/monitor/JiangxiRiverWarning';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const routes = (
    <IonRouterOutlet>
      <Route path="/user" component={User} exact />
      <Route path="/user/favorite" component={UserFavorite} exact />
      <Route path="/user/notice" component={UserNotice} exact />
      <Route path="/user/post" component={UserPost} exact />
      <Route path="/user/setting" component={UserSetting} exact />
      <Route path="/user/task" component={UserTask} exact />
      <Route path="/user/trash" component={UserTrash} exact />
      <Route path="/signin" component={Signin} exact />
      <Route path="/signup" component={Signup} exact />

      <Route path="/forum" component={Forum} />
      <Route path="/forum/post/new" component={NewPost} />
      <Route path="/forum/post/detail/:id" component={Post} />
      <Route path="/forum/post/update/:id" component={UpdatePost} />

      <Route path="/monitor" component={Monitor} exact={true} />
      <Route path="/monitor/jiangxi-river-warning" component={JiangxiRiverWarning} exact={true} />

      <Route path="/response" component={Response} exact={true} />
      <Route path="/response/:id" component={ResponseDetail} exact={true} />
      <Route path="/response/task/:id" component={TaskDetail} exact={true} />

      <Route path="/document" component={Document} />
      <Route path="/document/folder/:id" component={Folder} />

      <Route path="/" render={() => <Redirect to="/response" />} exact={true} />
    </IonRouterOutlet>
  )

  const small = (
    <IonTabs>
      {routes}
      <IonTabBar slot="bottom" selectedTab="response">
        <IonTabButton tab="monitor" href="/monitor">
          <IonIcon icon={hammerOutline} size="small" />
          <IonLabel>工具</IonLabel>
        </IonTabButton>
        <IonTabButton tab="document" href="/document">
          <IonIcon icon={folderOutline} size="small" />
          <IonLabel>文档</IonLabel>
        </IonTabButton>
        <IonTabButton tab="response" href="/response">
          <IonIcon icon={volumeHighOutline} size="small" />
          <IonLabel>响应</IonLabel>
        </IonTabButton>
        <IonTabButton tab="forum" href="/forum">
          <IonIcon icon={chatbubblesOutline} size="small" />
          <IonLabel>论坛</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href="/user">
          <IonIcon icon={personOutline} size="small" />
          <IonLabel>我的</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )

  return (
    <IonApp>
      <IonReactRouter>
        {localStorage.getItem("deviceSize") === "large" && routes}
        {localStorage.getItem("deviceSize") === "small" && small}
      </IonReactRouter>
    </IonApp>
  );

};

export default App;
