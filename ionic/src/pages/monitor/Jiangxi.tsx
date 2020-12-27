import React from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonButtons, IonBackButton, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonCard,
  IonCardHeader, IonList, IonListHeader,
  IonGrid, IonRow, IonCol
} from '@ionic/react';
import JiangxiMap from '../../components/monitor/jiangxi/JiangxiMap'

const Jiangxi: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>江西省水雨情</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>水雨情地图</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <JiangxiMap />
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>中小河流洪水预警</IonCardTitle>
                  <IonCardSubtitle>更新时间: 2020-12-27 16:50:15</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  {/* <h1 class='title'>暂无最近24小时内，1小时雨量超过30毫米的测站</h1>\n<h1 class='title'>暂无最近24小时内，3小时雨量超过50毫米的测站</h1>\n<h1 class='title'>暂无24小时内雨量超过80毫米的测站</h1>\n<br><center>更新时间: 2020-12-27 16:50:15</center> */}
                  <IonList>
                    <IonListHeader>暂无最近24小时内，1小时雨量超过30毫米的测站</IonListHeader>
                    {/* <IonItem>暂无最近24小时内，1小时雨量超过30毫米的测站</IonItem> */}
                    <IonListHeader>暂无最近24小时内，3小时雨量超过50毫米的测站</IonListHeader>
                    {/* <IonItem>暂无最近24小时内，3小时雨量超过50毫米的测站</IonItem> */}
                    <IonListHeader>暂无24小时内雨量超过80毫米的测站</IonListHeader>
                    {/* <IonItem>暂无24小时内雨量超过80毫米的测站</IonItem> */}
                  </IonList>
                </IonCardContent>
                <IonCardHeader>
                  <IonCardSubtitle>数据来源:http://slt.jiangxi.gov.cn/col/col29334/index.html</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Jiangxi;


