import { IonCol, IonGrid, IonRow, IonItem, IonThumbnail, IonLabel, IonImg, IonAvatar } from '@ionic/react';
import React from 'react';

const Response: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem button routerLink={'/library/document'}>
            <IonAvatar slot="start">
              <IonImg src="/assets/library/017-folder.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>文件夹</h3>
              <p>2020/12/13 23:10</p>
            </IonLabel>
          </IonItem>
          <IonItem button routerLink={'/library/document'}>
            <IonAvatar slot="start">
              <IonImg src="/assets/library/050-file.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>文件</h3>
              <p>2020/12/13 23:10</p>
            </IonLabel>
          </IonItem>
          <IonItem button routerLink={'/library/document'}>
            <IonAvatar slot="start">
              <IonImg src="/assets/library/002-table.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>表格</h3>
              <p>2020/12/13 23:10</p>
            </IonLabel>
          </IonItem>
          <IonItem button routerLink={'/library/document'}>
            <IonAvatar slot="start">
              <IonImg src="/assets/library/038-film.svg" />
            </IonAvatar>
            <IonLabel>
              <h3>视频</h3>
              <p>2020/12/13 23:10</p>
            </IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Response;
