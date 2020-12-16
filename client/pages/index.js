import buildClient from '../api/build-client';
import { IonContent } from '../lib/ionic';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <IonContent>You are signed in</IonContent>
  ) : (
    <IonContent>You are NOT signed in</IonContent>
  );
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  const client = buildClient(context);
  const { data } = await client.get('/api/user/currentuser');

  return data;
};

export default LandingPage;
