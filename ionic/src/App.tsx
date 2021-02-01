import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { volumeHighOutline, folderOutline, notificationsOutline, chatbubblesOutline, personOutline } from 'ionicons/icons';
import Response from './pages/response/Response';
import ResponseDetail from './pages/response/ResponseDetail';
import ResponseTask from './pages/response/ResponseTask';
import Library from './pages/library/Library';
import Document from './pages/library/Document';
import Notice from './pages/notice/Notice';
import Forum from './pages/forum/Forum';
import User from './pages/user/User';
import UserUpdate from './pages/user/UserUpdate';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/response" component={Response} exact={true} />
          <Route path="/response/:id" component={ResponseDetail} exact={true} />
          <Route path="/response/task/:id" component={ResponseTask} exact={true} />
          <Route path="/library" component={Library} exact={true} />
          <Route path="/library/document" component={Document} exact={true} />
          <Route path="/notice" component={Notice} />
          <Route path="/forum" component={Forum} />
          <Route path="/user" component={User} />
          <Route path="/user/update" component={UserUpdate} />
          <Route path="/" render={() => <Redirect to="/response" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="notice" href="/notice">
            <IonIcon icon={notificationsOutline} size="small" />
            <IonLabel>通知</IonLabel>
          </IonTabButton>
          <IonTabButton tab="response" href="/response">
            <IonIcon icon={volumeHighOutline} size="small" />
            <IonLabel>响应</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon icon={personOutline} size="small" />
            <IonLabel>我的</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
