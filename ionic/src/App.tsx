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
import { pulseOutline, volumeHighOutline, folderOutline, chatbubblesOutline, personOutline } from 'ionicons/icons';

import Monitor from './pages/Monitor';
import Response from './pages/Response';
import Product from './pages/Product';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import User from './pages/User';
import UserFavorite from './pages/user/UserFavorite';
import UserNotice from './pages/user/UserNotice';
import UserPost from './pages/user/UserPost';
import UserSetting from './pages/user/UserSetting';
import UserTask from './pages/user/UserTask';
import UserTrash from './pages/user/UserTrash';

import Community from './pages/Community';
import NewPost from './pages/community/NewPost'

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
      <Route path="/community" component={Community} />
      <Route path="/community/new" component={NewPost} />
      <Route path="/monitor" component={Monitor} exact={true} />
      <Route path="/response" component={Response} exact={true} />
      <Route path="/product" component={Product} />
      <Route path="/" render={() => <Redirect to="/monitor" />} exact={true} />
    </IonRouterOutlet>
  )

  const small = (
    <IonTabs>
      {routes}
      <IonTabBar slot="bottom">
        <IonTabButton tab="monitor" href="/monitor">
          <IonIcon icon={pulseOutline} size="small" />
          <IonLabel>监测</IonLabel>
        </IonTabButton>
        <IonTabButton tab="response" href="/response">
          <IonIcon icon={volumeHighOutline} size="small" />
          <IonLabel>响应</IonLabel>
        </IonTabButton>
        <IonTabButton tab="product" href="/product">
          <IonIcon icon={folderOutline} size="small" />
          <IonLabel>产品</IonLabel>
        </IonTabButton>
        <IonTabButton tab="community" href="/community">
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
