import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export const MButton = ({ label, ...props }) => {
  return <Button {...props}>{label}</Button>;
};

MButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'dashed', 'text', 'link', 'default']),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  shape: PropTypes.oneOf(['circle', 'round', undefined]),
  label: PropTypes.string.isRequired,
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  danger:PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

MButton.defaultProps = {
  onClick: undefined,
};
