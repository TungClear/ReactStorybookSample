import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export const MButton = props => {
  return <Button {...props}>{props.children}</Button>;
};

MButton.propTypes = {
  htmlType: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'dashed', 'text', 'link', 'default']),
  shape: PropTypes.oneOf(['circle', 'round', undefined]),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,

  block: PropTypes.bool,
  ghost: PropTypes.bool,
  danger: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

MButton.defaultProps = {
  onClick: undefined,
};
