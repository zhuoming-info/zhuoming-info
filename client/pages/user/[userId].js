import {
  IonCardSubtitle, IonCardTitle, IonCard, IonList, IonContent,
  IonItem, IonLabel, IonGrid, IonRow, IonCol, IonAvatar,
  IonHeader, IonToolbar, IonTitle
} from '../../lib/ionic';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const UserShow = ({ user }) => {
  //   const { doRequest, errors } = useRequest({
  //     url: '/api/orders',
  //     method: 'post',
  //     body: {
  //       userId: user.id,
  //     },
  //     onSuccess: (order) =>
  //       Router.push('/orders/[orderId]', `/orders/${order.id}`),
  //   });

  return (
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle>个人信息</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard>
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" />
            </IonAvatar>
            <IonLabel>
              <IonCardTitle>{user.username}</IonCardTitle>
              <IonCardSubtitle>{user.skill}</IonCardSubtitle>
            </IonLabel>
          </IonItem>
          <IonItem color="light" lines="none">
            <IonGrid>
              <IonRow>
                <IonCol size-lg="4" size-md="3" size-sm="2">
                  <IonCardSubtitle>用户名</IonCardSubtitle>
                </IonCol>
                <IonCol size-lg="8" size-md="9" size-sm="10">
                  <IonLabel className="ion-text-wrap">{user.username}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem lines="none">
            <IonGrid>
              <IonRow>
                <IonCol size-lg="4" size-md="3" size-sm="2">
                  <IonCardSubtitle>密码</IonCardSubtitle>
                </IonCol>
                <IonCol size-lg="8" size-md="9" size-sm="10">
                  <IonLabel className="ion-text-wrap">. . . . . . . .</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem color="light" lines="none">
            <IonGrid>
              <IonRow>
                <IonCol size-lg="4" size-md="3" size-sm="2">
                  <IonCardSubtitle>技能</IonCardSubtitle>
                </IonCol>
                <IonCol size-lg="8" size-md="9" size-sm="10">
                  <IonLabel className="ion-text-wrap">{user.skill}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem lines="none">
            <IonGrid>
              <IonRow>
                <IonCol size-lg="4" size-md="3" size-sm="2">
                  <IonCardSubtitle>一句话介绍</IonCardSubtitle>
                </IonCol>
                <IonCol size-lg="8" size-md="9" size-sm="10">
                  <IonLabel className="ion-text-wrap">{user.intro}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem color="light" lines="none">
            <IonGrid>
              <IonRow>
                <IonCol size-lg="4" size-md="3" size-sm="2">
                  <IonCardSubtitle>角色</IonCardSubtitle>
                </IonCol>
                <IonCol size-lg="8" size-md="9" size-sm="10">
                  <IonLabel className="ion-text-wrap">{user.role}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonList>
        {/* <h1>{user.title}</h1>
      <h4>Price: {user.price}</h4>
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button> */}
      </IonCard>
    </IonContent>

  );
};

UserShow.getInitialProps = async (context, client) => {
  const { userId } = context.query;
  const { data } = await client.get(`/api/user/${userId}`);

  return { user: data };
};

export default UserShow;
