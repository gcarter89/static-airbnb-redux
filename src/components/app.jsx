import React from 'react';
import FlatList from '../containers/flat_list';
import Map from '../containers/map';

const App = () => {
  console.log("App loaded");
  return (
    <div className="row">
      <FlatList />
      <Map />
    </div>
  );
};

export default App;
