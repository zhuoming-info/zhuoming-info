import React, { useEffect, useState } from "react";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCardContent, IonLabel, IonAvatar, IonBadge, IonItem,
  IonButtons, IonButton, IonIcon, IonBackButton, IonGrid,
  IonRow, IonCol, IonAlert
} from '@ionic/react';
import { heartOutline, chatbubblesOutline } from 'ionicons/icons';
import axios from 'axios';
import moment from 'moment';
import CommentItem from '../../components/forum/CommentItem'

const Post: React.FC = (props: any) => {
  const [showDelete, setShowDelete] = useState(false);
  const [post, setPost] = useState(
    {
      id: "",
      userId: "",
      tag: "",
      content: "",
      likeUsersId: [],
      commentsId: [],
      createdAt: ""
    }
  )
  const [user, setUser] = useState(
    {
      avatar: "",
      username: ""
    }
  )
  useEffect(() => {
    axios.get(`/api/post/${props.match.params.id}`)
      .then(function (post) {
        setPost(post.data)
        axios.get(`/api/user/${post.data.userId}`)
          .then(function (user) {
            setUser(user.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.match.params.id])

  const onDelete = () => {
    axios.delete(`/api/post/${props.match.params.id}`)
      .then(() => {
        window.location.href = "/forum"
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/forum" text="返回" />
          </IonButtons>
          <IonTitle>查看帖子</IonTitle>
          {localStorage.getItem("userId") &&
            <IonButtons slot="end">
              <IonButton color="primary" href={`/forum/post/update/${props.match.params.id}`}>编辑</IonButton>
              <IonButton color="danger" onClick={() => { setShowDelete(true) }}>删除</IonButton>
              <IonAlert
                isOpen={showDelete}
                onDidDismiss={() => setShowDelete(false)}
                header={'是否删除？'}
                buttons={[{ text: "否" }, { text: "是", handler: () => { onDelete() } }]}
              />
            </IonButtons>
          }
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol
              size-xs="12"
              size-sm="10"
              size-md="8"
              size-lg="6"
              style={{ margin: "0 auto" }}>
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <img alt="" src={user.avatar} />
                </IonAvatar>
                <IonLabel>
                  <h2>{user.username}</h2>
                  <p>{moment(post.createdAt).format("L") + "  " + moment(post.createdAt).format("LT")}</p>
                </IonLabel>
              </IonItem>
              <IonCardContent>
                {post.content}
              </IonCardContent>
              <IonItem>
                <IonBadge color="light">#{post.tag}</IonBadge>
                <IonButtons slot="end">
                  <IonButton color="medium">
                    <IonIcon icon={heartOutline}></IonIcon>
                    {post.likeUsersId.length}
                  </IonButton>
                  <IonButton color="medium">
                    <IonIcon icon={chatbubblesOutline}></IonIcon>
                    {post.commentsId.length}
                  </IonButton>
                </IonButtons>
              </IonItem>
              {/* {post.commentsId.map((comment, index) => {
                <CommentItem key={index} id={comment.id} />
              })} */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Post;



