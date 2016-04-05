import React from 'react';

const Hideable = ({children, isHidden=false}) => {
  if (isHidden)
    return <noscript/>;
  return <div>{children}</div>;
};

export default Hideable;
