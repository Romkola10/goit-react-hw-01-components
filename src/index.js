import React from 'react';
import ReactDOM from 'react-dom/client';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistic/Statistic';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transactions/Transactions';

import './index.css';
import user from './components/data/user.json';
import data from './components/data/data.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transactions.json';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
  </React.StrictMode>
  
);


