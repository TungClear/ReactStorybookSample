import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

export const MFormItem = props => {
  return <Form.Item {...props}>{props.children}</Form.Item>;
};

MFormItem.propTypes = {
  dependencies: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  extra: PropTypes.node,
  getValueFromEvent: PropTypes.func,
  getValueProps: PropTypes.func,
  rules: PropTypes.array,
  shouldUpdate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  trigger: PropTypes.string,
  validateStatus: PropTypes.string,
  validateTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  // UI
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  required: PropTypes.bool,
  hidden: PropTypes.bool,
  hasFeedback: PropTypes.bool,
  help: PropTypes.node,
  htmlFor: PropTypes.string,
  noStyle: PropTypes.bool,
  label: PropTypes.node,
  labelAlign: PropTypes.bool,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
};
