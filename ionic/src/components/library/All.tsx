import React from 'react';
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/react';

const All: React.FC = () => {
  return (
    <IonItem button routerLink={'/library/document'}>
      <IonThumbnail slot="start">
        <IonImg src="/assets/library/folder.svg" />
      </IonThumbnail>
      <IonLabel>
        <h3>（示例）开发者文档</h3>
        <p>2020/12/13 23:10</p>
      </IonLabel>
    </IonItem>
  );
};

export default All;
