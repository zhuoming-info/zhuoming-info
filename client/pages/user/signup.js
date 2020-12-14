import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [skill, setSkill] = useState('');
  const [intro, setIntro] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/user/signup',
    method: 'post',
    body: {
      email,
      password,
      username,
      skill,
      intro
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>邮箱</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>密码</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>用户名/昵称</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>专业/技能</label>
        <input
          value={skill}
          onChange={e => setSkill(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>一句话介绍</label>
        <input
          value={intro}
          onChange={e => setIntro(e.target.value)}
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
