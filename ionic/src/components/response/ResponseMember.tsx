import React, { useState } from "react";
import {
  IonButton, IonButtons, IonGrid, IonItem, IonLabel,
  IonSelect, IonSelectOption, IonRow, IonCol, IonAvatar, IonListHeader
} from '@ionic/react';
const ResponseMember: React.FC = () => {
  const [select, setSelect] = useState('group')
  return (
    <IonGrid>
      {/* <IonItem>
        <IonSelect slot="end" interface="popover" value={select} onIonChange={e => setSelect(e.detail.value)}>
          <IonSelectOption value="group">按组别</IonSelectOption>
          <IonSelectOption value="contribution">按贡献</IonSelectOption>
          <IonSelectOption value="status">按状态</IonSelectOption>
        </IonSelect>
      </IonItem> */}
      <IonRow>
        <IonCol>
          <IonListHeader>监测组</IonListHeader>
          <IonItem button>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>余清</IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>余清</IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>余清</IonLabel>
          </IonItem>
          <IonListHeader>信息组</IonListHeader>
          <IonItem button>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>余清</IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>余清</IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>余清</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ResponseMember;