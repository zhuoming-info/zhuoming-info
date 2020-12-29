import React, { useEffect, useState } from "react";
import {
  IonItem, IonCard, IonButtons, IonButton, IonIcon,
  IonCardContent, IonLabel, IonAvatar, IonBadge
} from '@ionic/react';
import { heartOutline, chatbubblesOutline } from 'ionicons/icons';
import axios from 'axios';
import moment from 'moment';

interface postType {
  id: string,
  userId: string,
  tag: string,
  content: string,
  likeUsersId: Array<string>,
  commentsId: Array<string>,
  createdAt: string
}

const PostCard: React.FC<postType> = (post) => {
  const [user, setUser] = useState(
    {
      avatar: "",
      username: ""
    }
  )
  useEffect(() => {
    if (post.userId) {
      axios.get(`/api/user/${post.userId}`)
        .then(function (res) {
          setUser(res.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [post.userId])
  return (
    <IonCard button href={`/forum/post/${post.id}`} >
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
      <IonItem lines="none">
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
    </IonCard>
  );
};

export default PostCard;



