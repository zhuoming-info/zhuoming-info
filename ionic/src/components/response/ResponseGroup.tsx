import React, { useState } from "react";
import { IonGrid, IonItem, IonLabel, IonText } from '@ionic/react';
import { chevronForwardOutline, chevronDownOutline } from 'ionicons/icons';
const ResponseGroup: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <IonGrid>
      <IonItem lines={open ? "none" : "inset"} button detailIcon={open ? chevronDownOutline : chevronForwardOutline} onClick={() => setOpen(!open)}>
        <IonLabel>监测组</IonLabel>
      </IonItem>
      {open && (
        <IonItem >
          <IonText>实弹射击的卡拉斯京的</IonText>
        </IonItem>
      )}
      <IonItem lines={open ? "none" : "inset"} button detailIcon={open ? chevronDownOutline : chevronForwardOutline} onClick={() => setOpen(!open)}>
        <IonLabel>信息组</IonLabel>
      </IonItem>
      {open && (
        <IonItem >
          <IonText>实弹射击的卡拉斯京的</IonText>
        </IonItem>
      )}
      <IonItem lines={open ? "none" : "inset"} button detailIcon={open ? chevronDownOutline : chevronForwardOutline} onClick={() => setOpen(!open)}>
        <IonLabel>产品组</IonLabel>
      </IonItem>
      {open && (
        <IonItem >
          <IonText>实弹射击的卡拉斯京的</IonText>
        </IonItem>
      )}
    </IonGrid>
  );
};

export default ResponseGroup;