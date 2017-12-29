import React from 'react';
import FAB from './FixedActionButton';
import FASB from './FixedActionSubButton';

const Dashboard = () => (
  <FAB color="red" icon="add">
    <FASB
      color="blue"
      icon="playlist_add"
      tooltipPosition="left"
      tooltipText="Add new category"
    />
  </FAB>
);

export default Dashboard;
