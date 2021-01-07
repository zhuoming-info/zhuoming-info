import React from "react";
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent,
  IonItem
} from '@ionic/react';

const JiangxiRiverWarningCover: React.FC = () => {
  return (
    <IonCard routerLink={"/monitor/jiangxi-river-warning"}>
      <IonCardHeader>
        <IonCardTitle>江西省｜中小河流洪水预警</IonCardTitle>
        <IonCardSubtitle>更新时间: 2020-12-27 16:50:15</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem lines='none'>暂无最近24小时内，1小时雨量超过30毫米的测站</IonItem>
        <IonItem lines='none'>暂无最近24小时内，3小时雨量超过50毫米的测站</IonItem>
        <IonItem lines='none'>最近24小时内雨量超过80毫米的测站1条</IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default JiangxiRiverWarningCover;


