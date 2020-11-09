import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Tanner Townsend',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.proheadshots.ca%2Fwp-content%2Fuploads%2F2016%2F02%2Fdoctors-headshot.jpg&f=1&nofb=1',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
