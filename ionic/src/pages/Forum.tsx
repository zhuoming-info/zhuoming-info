import React, { useEffect, useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonRow, IonGrid, IonIcon,
  IonCol, IonButtons, IonButton, IonItem, IonSelect, IonSelectOption, IonCard, IonCardHeader
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import HeaderLarge from '../components/HeaderLarge';
import axios from 'axios';
import PostCard from '../components/forum/PostCard'

const Forum: React.FC = () => {
  const [sort, setSort] = useState("time")
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
    axios.get(`/api/post?sort=${sort}`)
      .then(function (res) {
        setPosts(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sort])

  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="forum" /> : (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton>
                <IonSelect interface="popover" value={sort} onIonChange={e => setSort(e.detail.value)}>
                  <IonSelectOption value="time">按时间</IonSelectOption>
                  <IonSelectOption value="like">按点赞</IonSelectOption>
                </IonSelect>
              </IonButton>
            </IonButtons>
            <IonTitle>论坛</IonTitle>
            <IonButtons slot="start">
              <IonButton href={"/forum/post/new"}>发帖</IonButton>
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
              {localStorage.getItem("deviceSize") === "large" &&
                <IonItem lines="none">
                  <IonSelect interface="popover" value={sort} onIonChange={e => setSort(e.detail.value)}>
                    <IonSelectOption value="time">按时间排序</IonSelectOption>
                    <IonSelectOption value="like">按点赞排序</IonSelectOption>
                  </IonSelect>
                  <IonButtons slot="end">
                    <IonButton href={"/forum/post/new"} color="primary">
                      <IonIcon icon={addOutline}></IonIcon>发帖
                    </IonButton>
                  </IonButtons>
                </IonItem>
              }
              {posts.length === 0 ? (
                <IonCard>
                  <IonCardHeader>暂无帖子</IonCardHeader>
                </IonCard>
              ) : posts.map((post, index) => {
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



