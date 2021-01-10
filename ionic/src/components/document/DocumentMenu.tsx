import {
  IonContent, IonItem, IonList, IonMenu, IonHeader, IonToolbar,
  IonButtons, IonTitle, IonBackButton, IonIcon, IonLabel
} from '@ionic/react';
import { chevronForwardOutline, chevronDownOutline, addOutline } from 'ionicons/icons';
import React, { useState } from "react";

const DocumentMenu: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <IonMenu contentId="folder" type="reveal" side="start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {localStorage.getItem("deviceSize") === "large" && <IonBackButton defaultHref="/document" />}
          </IonButtons>
          <IonTitle>目录</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>概述</IonLabel>
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>1.one</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>2.two</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>3.three</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonIcon size="small" icon={addOutline} />
                <IonLabel>Add a page</IonLabel>
              </IonItem>
            </>
          }
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>微服务架构</IonLabel>
          </IonItem>
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>使用的技术</IonLabel>
          </IonItem>
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>环境搭建</IonLabel>
          </IonItem>
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>如何开发一个完全独立的服务</IonLabel>
          </IonItem>
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>如何开发一个不完全独立的服务</IonLabel>
          </IonItem>
          <IonItem button detailIcon="">
            <IonIcon size="small" icon={addOutline} />
            <IonLabel>Add a page</IonLabel>
          </IonItem>
        </IonList>
        <IonItem lines="none"></IonItem>
      </IonContent>
    </IonMenu>
  )
};

export default DocumentMenu;
