import React, { useEffect, useState } from "react";
import {
  IonLabel, IonAvatar, IonItem,
  IonButtons, IonButton, IonIcon
} from '@ionic/react';
import { heartOutline, chatbubblesOutline } from 'ionicons/icons';
import axios from 'axios';
import moment from 'moment';

const CommentItem: React.FC = (commentsId) => {
  const [comment, setComment] = useState(
    {
      id: "",
      userId: "",
      postId: "",
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
    axios.get(`/api/forum/comment/${commentsId}`)
      .then(function (comment) {
        setComment(comment.data)
        axios.get(`/api/user/${comment.data.userId}`)
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
  }, [commentsId])
  return (
    <>
      <IonItem lines="none">
        <IonAvatar slot="start">
          <img alt="" src={user.avatar} />
        </IonAvatar>
        <IonLabel>
          <h2>{user.username}</h2>
          <p>{moment(comment.createdAt).format("L") + "  " + moment(comment.createdAt).format("LT")}</p>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        {comment.content}
      </IonItem>
      <IonItem>
        <IonButtons slot="end">
          <IonButton color="medium">
            <IonIcon icon={heartOutline}></IonIcon>
            {comment.likeUsersId.length}
          </IonButton>
          <IonButton color="medium">
            <IonIcon icon={chatbubblesOutline}></IonIcon>
            {comment.commentsId.length}
          </IonButton>
        </IonButtons>
      </IonItem>
    </>
  );
};

export default CommentItem;



