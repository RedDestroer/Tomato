import React from 'react';

type Props = {
  name: string;
  value: string;
};

export const PropertyInfo: React.FC<Props> = props => {
  const { name, value } = props;

  return (
    <div>
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};
