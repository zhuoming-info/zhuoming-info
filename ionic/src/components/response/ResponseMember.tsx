import React, { useState } from "react";
import {
  IonGrid, IonItem, IonLabel, IonSelect, IonSelectOption,
  IonRow, IonCol, IonAvatar, IonListHeader, IonList
} from '@ionic/react';
const ResponseMember: React.FC = () => {
  const [select, setSelect] = useState('group')
  return (
    <IonList>
      <IonItem>
        <IonSelect slot="end" interface="popover" value={select} onIonChange={e => setSelect(e.detail.value)}>
          <IonSelectOption value="group">按组别</IonSelectOption>
          <IonSelectOption value="contribution">按贡献</IonSelectOption>
          <IonSelectOption value="status">按状态</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonListHeader>信息组</IonListHeader>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Poe</h2>
          <h3>New Ride</h3>
          <p>I just upgraded my X-Wing. Next time...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Ben</h2>
          <h3>Move Along</h3>
          <p>These aren't the droids you're looking for...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Leia</h2>
          <h3>You're My Only Hope</h3>
          <p>I've placed information vital to the survival...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Yoda</h2>
          <h3>Size matters not</h3>
          <p>Do or do not. There is no try...</p>
        </IonLabel>
      </IonItem>
      <IonListHeader>监测组</IonListHeader>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Finn</h2>
          <h3>I'm a big deal</h3>
          <p>Listen, I've had a pretty messed up day...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Han</h2>
          <h3>Look, kid...</h3>
          <p>I've got enough on my plate as it is, and I...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Rey</h2>
          <h3>I can handle myself</h3>
          <p>You will remove these restraints and leave...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Luke</h2>
          <h3>Your thoughts betray you</h3>
          <p>I feel the good in you, the conflict...</p>
        </IonLabel>
      </IonItem>
      <IonListHeader>信息组</IonListHeader>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Poe</h2>
          <h3>New Ride</h3>
          <p>I just upgraded my X-Wing. Next time...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Ben</h2>
          <h3>Move Along</h3>
          <p>These aren't the droids you're looking for...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Leia</h2>
          <h3>You're My Only Hope</h3>
          <p>I've placed information vital to the survival...</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>
          <h2>Yoda</h2>
          <h3>Size matters not</h3>
          <p>Do or do not. There is no try...</p>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};

export default ResponseMember;