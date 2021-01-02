import React, { useEffect, useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonRow, IonGrid, IonIcon,
  IonCol, IonButtons, IonButton, IonItem
} from '@ionic/react';
import { addOutline, swapVerticalOutline } from 'ionicons/icons';
import HeaderLarge from '../components/HeaderLarge';
import axios from 'axios';
import PostCard from '../components/forum/PostCard'

const Forum: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      userId: "",
      tag: "",
      content: "",
      likeUsersId: [],
      commentsId: [],
      createdAt: ""
    }
  ])
  useEffect(() => {
    axios.get('/api/post')
      .then(function (res) {
        setPosts(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="forum" /> : (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonIcon icon={swapVerticalOutline}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>论坛</IonTitle>
            <IonButtons slot="end">
              <IonButton href={"/forum/new"}>添加</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol
              size-xs="12"
              size-sm="10"
              size-md="8"
              size-lg="6"
              style={{ margin: "0 auto" }}>
              {posts.length !== 0 && localStorage.getItem("deviceSize") === "large" &&
                <IonItem lines="none">
                  <IonButtons slot="start">
                    <IonButton color="primary">
                      <IonIcon icon={swapVerticalOutline}></IonIcon>筛选
                    </IonButton>
                  </IonButtons>
                  <IonButtons slot="end">
                    <IonButton href={"/forum/new"} color="primary">
                      <IonIcon icon={addOutline}></IonIcon>添加
                    </IonButton>
                  </IonButtons>
                </IonItem>
              }
              {posts.length === 0 ? "暂无帖子" : posts.map((post, index) => {
                return (
                  <PostCard
                    key={index}
                    id={post.id}
                    userId={post.userId}
                    tag={post.tag}
                    content={post.content}
                    likeUsersId={post.likeUsersId}
                    commentsId={post.commentsId}
                    createdAt={post.createdAt}
                  />
                )
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Forum;



