import React, { useEffect, useState } from "react";
import {
  IonContent, IonPage, IonHeader, IonToolbar,
  IonTitle, IonItem, IonCard, IonRow, IonGrid,
  IonCol, IonButtons, IonButton, IonIcon,
  IonCardContent, IonLabel, IonAvatar
} from '@ionic/react';
import { heartOutline, chatbubblesOutline } from 'ionicons/icons';
import HeaderLarge from '../components/HeaderLarge';
import axios from 'axios';

const Community: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      likeUsersId: [],
      content: "",
      userId: "",
      id: ""
    }
  ])
  useEffect(() => {
    axios.get('/api/post')
      .then(function (res) {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <IonPage>
      {localStorage.getItem("deviceSize") === "large" ? <HeaderLarge title="论坛" /> : (
        <IonHeader>
          <IonToolbar>
            <IonTitle>论坛</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="12" size-md="10" size-lg="8" style={{ margin: "0 auto" }}>
              <IonTitle>所有帖子</IonTitle>
              {/* {posts.map((post, index) => {
                return (
                  <IonCard key={index}>
                    <IonItem>
                      <IonAvatar slot="start">
                        <img alt="avatar" src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
                      </IonAvatar>
                      <IonLabel>
                        <h2>faiyuching</h2>
                        <p>2020/12/23 12:34 AM</p>
                      </IonLabel>
                    </IonItem>
                    <IonCardContent>
                      冬季的莫斯科由于燃气没有得到及时的供应，很多居民都开始抱怨一周供暖的时间不足。三个平民在一起讨论这个事情。第一个人说：如果我是党的干部就好了，一周里，家里暖气能供应5天，每天16个小时。这时第二个人说：如果我是东德人就好了，家里暖气每周能供应6天，每天20个小时。第三个人说：你们懂什么，如果我是列宁同志就好了，我躺尸体的地方能一周7天无休止供应暖气。前两个人赶紧捂住第三个人的嘴，怕被其他人听见。第三个人哈哈大笑：你们怕什么，现在街上执勤的秘密警察都冻僵了。
                    </IonCardContent>
                    <IonItem lines="none">
                      <IonButtons slot="end">
                        <IonButton color="medium">
                          <IonIcon size="small" icon={heartOutline}></IonIcon>12
                        </IonButton>
                        <IonButton color="medium">
                          <IonIcon size="small" icon={chatbubblesOutline}></IonIcon>22
                        </IonButton>
                      </IonButtons>
                    </IonItem>
                  </IonCard>
                )
              })} */}
              <IonCard>
                <IonItem>
                  <IonAvatar slot="start">
                    <img alt="avatar" src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>faiyuching</h2>
                    <p>2020/12/23 12:34 AM</p>
                  </IonLabel>
                </IonItem>
                <IonCardContent>
                  赫鲁晓夫同志1959年访美，同美国总统一起访问当地的一个百货超市。赫鲁晓夫对美国总统称赞百货超市里东西琳琅满目，应有尽有，像是到了人间天堂。美国总统问：赫鲁晓夫先生，见到了这个超市，你还敢说，社会主义一定比资本主义先进吗？赫鲁晓夫说：确实，这里有很多东西我们苏联是没有的，但我们今后经济发达了总是会有的。而有一样东西你们美国永远都不可能有。美国总统很好奇，问到有什么东西美国永远都不会有。赫鲁晓夫笑道：国家元首终身制。
                </IonCardContent>
                <IonItem lines="none">
                  <IonButtons slot="end">
                    <IonButton color="medium">
                      <IonIcon size="small" icon={heartOutline}></IonIcon>12
                        </IonButton>
                    <IonButton color="medium">
                      <IonIcon size="small" icon={chatbubblesOutline}></IonIcon>22
                        </IonButton>
                  </IonButtons>
                </IonItem>
              </IonCard>
              <IonCard>
                <IonItem>
                  <IonAvatar slot="start">
                    <img alt="avatar" src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>faiyuching</h2>
                    <p>2020/12/23 12:34 AM</p>
                  </IonLabel>
                </IonItem>
                <IonCardContent>
                  冬季的莫斯科由于燃气没有得到及时的供应，很多居民都开始抱怨一周供暖的时间不足。三个平民在一起讨论这个事情。第一个人说：如果我是党的干部就好了，一周里，家里暖气能供应5天，每天16个小时。这时第二个人说：如果我是东德人就好了，家里暖气每周能供应6天，每天20个小时。第三个人说：你们懂什么，如果我是列宁同志就好了，我躺尸体的地方能一周7天无休止供应暖气。前两个人赶紧捂住第三个人的嘴，怕被其他人听见。第三个人哈哈大笑：你们怕什么，现在街上执勤的秘密警察都冻僵了。
                </IonCardContent>
                <IonItem lines="none">
                  <IonButtons slot="end">
                    <IonButton color="medium">
                      <IonIcon size="small" icon={heartOutline}></IonIcon>12
                        </IonButton>
                    <IonButton color="medium">
                      <IonIcon size="small" icon={chatbubblesOutline}></IonIcon>22
                        </IonButton>
                  </IonButtons>
                </IonItem>
              </IonCard>
              <IonCard>
                <IonItem>
                  <IonAvatar slot="start">
                    <img alt="avatar" src="https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>faiyuching</h2>
                    <p>2020/12/23 12:34 AM</p>
                  </IonLabel>
                </IonItem>
                <IonCardContent>
                  1969年中苏爆发边界冲突，有消息传来说，中国军队打败了苏联军队，许多苏联老百姓都很愤怒，说这次中国又打死了好多苏联人，一定要报仇雪恨，只有杨科夫斯基在那里拍手称快。众人都感到十分义愤填膺，说杨科夫斯基怎么能为同胞的死感到快乐。杨科夫斯基解释道，中国打死的十个当地军人中，有三个是朝鲜人，两个是车臣人，四个是哈萨克人，还有一个是乌克兰人，跟我有什么关系。众人感到疑惑：那我们的人在哪里？杨科夫斯基说道：没看见吗，我们他妈的都在这排队抢面包。
                </IonCardContent>
                <IonItem lines="none">
                  <IonButtons slot="end">
                    <IonButton color="medium">
                      <IonIcon size="small" icon={heartOutline}></IonIcon>12
                        </IonButton>
                    <IonButton color="medium">
                      <IonIcon size="small" icon={chatbubblesOutline}></IonIcon>22
                        </IonButton>
                  </IonButtons>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Community;



