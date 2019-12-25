import React from 'react';
import loading from '../assets/loading.svg';

interface Props {}

const Loading: React.FC<Props> = props => {
  return (
    <div className="spinner">
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
