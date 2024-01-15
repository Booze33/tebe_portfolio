import React from 'react';
import One from './boxes/one';
import Two from './boxes/two';
import Three from './boxes/three';
import Four from './boxes/four';
import Five from './boxes/five';
import Six from './boxes/six';

const Boxes = () => {

  return (
    <div className="grid">
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
    </div>
  );
};

export default Boxes;
