import Menu from './components/Menu';
import React, { useContext } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs, IonTabBar,
  IonTabButton, IonIcon,
  IonLabel, IonSplitPane
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { alertCircleOutline, earthOutline, folderOutline, chatbubblesOutline } from 'ionicons/icons';

import Monitor from './pages/Monitor';
import Response from './pages/Response';
import Product from './pages/Product';
import Community from './pages/Community';
import UserFavorite from './pages/user/UserFavorite'
import UserNotice from './pages/user/UserNotice'
import UserPost from './pages/user/UserPost'
import UserSetting from './pages/user/UserSetting'
import UserTask from './pages/user/UserTask'
import UserTrash from './pages/user/UserTrash'
import Signin from './pages/user/Signin'
import Signup from './pages/user/Signup'

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

import { Contexts } from "./util/Contexts";
import axios from 'axios';
import ScreenSize from "./util/ScreenSize"

const App: React.FC = () => {
  const ctx = useContext(Contexts);
  ctx.deviceSize = ScreenSize(document.documentElement.clientWidth);
  axios.get('/api/user/currentuser')
    .then(function (res) {
      if (res.data.currentUser) {
        ctx.currentUser = res.data.currentUser
      }
    })
    .catch(function (error) {
      console.log(error);
    })

  const large = (
    <IonReactRouter>
      <Menu />
      {window.location.pathname.split("/")[1] === "user" ? (
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/user/favorite" component={UserFavorite} exact />
            <Route path="/user/notice" component={UserNotice} exact />
            <Route path="/user/post" component={UserPost} exact />
            <Route path="/user/setting" component={UserSetting} exact />
            <Route path="/user/task" component={UserTask} exact />
            <Route path="/user/trash" component={UserTrash} exact />
            <Route path="/" render={() => <Redirect to="/monitor" />} exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
      ) : (
          <IonRouterOutlet id="main">
            <Route path="/signin" component={Signin} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/monitor" component={Monitor} exact={true} />
            <Route path="/response" component={Response} exact={true} />
            <Route path="/product" component={Product} />
            <Route path="/community" component={Community} />
            <Route path="/" render={() => <Redirect to="/monitor" />} exact={true} />
          </IonRouterOutlet>
        )}
    </IonReactRouter>
  )

  const small = (
    <IonReactRouter>
      <Menu />
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route path="/user/favorite" component={UserFavorite} exact />
          <Route path="/user/notice" component={UserNotice} exact />
          <Route path="/user/post" component={UserPost} exact />
          <Route path="/user/setting" component={UserSetting} exact />
          <Route path="/user/task" component={UserTask} exact />
          <Route path="/user/trash" component={UserTrash} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/monitor" component={Monitor} exact={true} />
          <Route path="/response" component={Response} exact={true} />
          <Route path="/product" component={Product} />
          <Route path="/community" component={Community} />
          <Route path="/" render={() => <Redirect to="/monitor" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="monitor" href="/monitor">
            <IonIcon icon={alertCircleOutline} size="small" />
            <IonLabel>监测</IonLabel>
          </IonTabButton>
          <IonTabButton tab="response" href="/response">
            <IonIcon icon={earthOutline} size="small" />
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
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )

  return (
    <Contexts.Provider value={{ currentUser: ctx.currentUser, deviceSize: ctx.deviceSize }}>
      <IonApp>
        {ctx.deviceSize === "large" && large}
        {ctx.deviceSize === "small" && small}
      </IonApp>
    </Contexts.Provider>
  );

};

export default App;
