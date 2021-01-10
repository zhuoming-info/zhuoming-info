import {
  IonContent, IonItem, IonList, IonMenu, IonHeader, IonToolbar,
  IonButtons, IonTitle, IonBackButton, IonIcon
} from '@ionic/react';
import { chevronForwardOutline, chevronDownOutline } from 'ionicons/icons';
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
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />概述
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon=""><IonIcon />1.one</IonItem>
              <IonItem button detailIcon=""><IonIcon />2.two</IonItem>
              <IonItem button detailIcon=""><IonIcon />3.three</IonItem>
            </>
          }
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />微服务架构
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon=""><IonIcon />1.one</IonItem>
              <IonItem button detailIcon=""><IonIcon />2.two</IonItem>
              <IonItem button detailIcon=""><IonIcon />3.three</IonItem>
            </>
          }
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />使用的技术
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon=""><IonIcon />1.one</IonItem>
              <IonItem button detailIcon=""><IonIcon />2.two</IonItem>
              <IonItem button detailIcon=""><IonIcon />3.three</IonItem>
            </>
          }
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />环境搭建
          </IonItem>
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />如何开发一个完全独立的服务
          </IonItem>
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />如何开发一个不完全独立的服务
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default DocumentMenu;
