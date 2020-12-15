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
    <div>
      {user.username}
      {/* <h1>{user.title}</h1>
      <h4>Price: {user.price}</h4>
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button> */}
    </div>
  );
};

UserShow.getInitialProps = async (context, client) => {
  const { userId } = context.query;
  const { data } = await client.get(`/api/user/${userId}`);

  return { user: data };
};

export default UserShow;
