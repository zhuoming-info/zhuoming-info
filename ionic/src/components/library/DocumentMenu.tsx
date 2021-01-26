import {
  IonContent, IonItem, IonList, IonMenu, IonHeader, IonToolbar,
  IonTitle, IonIcon, IonLabel
} from '@ionic/react';
import { chevronForwardOutline, chevronDownOutline, addOutline } from 'ionicons/icons';
import React, { useState } from "react";

const DocumentMenu: React.FC = () => {
  const [open, setOpen] = useState(true)
  return (
    <IonMenu contentId="document" type="reveal" side="start">
      <IonHeader>
        <IonToolbar>
          <IonTitle>目录</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button detailIcon="" lines="none" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>前言</IonLabel>
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>为什么使用微服务架构</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>微服务之间的通信方式</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>统一返回数据格式</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>统一错误处理</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonIcon size="small" icon={addOutline} />
                <IonLabel>Add a page</IonLabel>
              </IonItem>
            </>
          }
          <IonItem button detailIcon="" lines="none" onClick={() => { setOpen(!open) }}>
            <IonIcon size="small" icon={open ? chevronDownOutline : chevronForwardOutline} />
            <IonLabel>开始</IonLabel>
          </IonItem>
          {open &&
            <>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>环境搭建</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>运行程序</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>创建一个服务</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>与其他服务通信（可选）</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>编写测试代码（可选）</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonLabel>编写前端代码</IonLabel>
              </IonItem>
              <IonItem button detailIcon="" lines="none">
                <IonIcon /><IonIcon size="small" icon={addOutline} />
                <IonLabel>Add a page</IonLabel>
              </IonItem>
            </>
          }
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default DocumentMenu;
