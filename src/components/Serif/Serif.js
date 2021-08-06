import React from 'react';

export default function Serif({ as, children }) {
  return React.createElement(as, undefined, children);
}
Serif.defaultProps = {
  as: 'span',
}