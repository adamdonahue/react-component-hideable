import React from 'react';

const Hideable = ({children, isHidden=false}) => {
  if (isHidden)
    return <div />;
  return <div>{children}</div>;
};

export default Hideable;
