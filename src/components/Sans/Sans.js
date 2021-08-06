import React from 'react';

export default function Sans({ as, children }) {
  return React.createElement(as, undefined, children);
}
Sans.defaultProps = {
  as: 'span',
};
