import React from 'react';
import FAB from './FixedActionButton';
import FASB from './FixedActionSubButton';
import CategoryList from './CategoryList';

const Dashboard = () => (
  <div>
    <CategoryList />

    <FAB color="red" icon="add">
      <FASB
        color="blue"
        icon="playlist_add"
        to="/categories/new"
        tooltipPosition="left"
        tooltipText="Add new category"
      />
    </FAB>
  </div>
);

export default Dashboard;
