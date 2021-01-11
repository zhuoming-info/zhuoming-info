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
            <IonLabel>前言</IonLabel>
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>为什么使用微服务架构</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>微服务之间的通信方式</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>统一返回数据格式</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>统一错误处理</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonIcon size="small" icon={addOutline} />
                <IonLabel>Add a page</IonLabel>
              </IonItem>
            </>
          }
          <IonItem button detailIcon="" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>开始</IonLabel>
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>环境搭建</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>运行程序</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>创建一个服务</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>与其他服务通信（可选）</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>编写测试代码（可选）</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonLabel>编写前端代码</IonLabel>
              </IonItem>
              <IonItem button detailIcon="">
                <IonIcon /><IonIcon size="small" icon={addOutline} />
                <IonLabel>Add a page</IonLabel>
              </IonItem>
            </>
          }
        </IonList>
        <IonItem lines="none"></IonItem>
      </IonContent>
    </IonMenu>
  )
};

export default DocumentMenu;
