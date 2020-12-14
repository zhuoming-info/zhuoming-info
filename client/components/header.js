import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon } from '../lib/ionic';
import { logoGithub } from 'ionicons/icons';

export default ({ currentUser }) => {
  return (
    <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonTitle>卓明</IonTitle>
        <IonButton color="dark" href={'/forecast'}>预测</IonButton>
        <IonButton color="dark" href={'/response'}>响应</IonButton>
        <IonButton color="dark" href={'/product'}>产品</IonButton>
        <IonButton color="dark" href={'/forum'}>论坛</IonButton>
        <IonButton color="dark" href={'/develop'}>
          <IonIcon slot="start" icon={logoGithub} />
          参与开发
        </IonButton>
      </IonButtons>
      <IonButtons slot="end">
        {!currentUser && <IonButton color="primary" href={'/user/signup'}>注册</IonButton>}
        {!currentUser && <IonButton color="primary" href={'/user/signin'}>登录</IonButton>}
        {currentUser && <IonButton color="danger" href={'/user/signout'}>登出</IonButton>}
      </IonButtons>
    </IonToolbar>
  </IonHeader>
  );
};
