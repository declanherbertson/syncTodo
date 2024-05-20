import React from 'react';
import { List } from '../List/List';

export const DashboardContainer: React.FC<{}> = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <List />
      </div>
    </div>
  );
}