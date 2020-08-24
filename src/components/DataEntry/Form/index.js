import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

export const MForm = props => {
  return <Form {...props}>{props.children}</Form>;
};

MForm.propTypes = {
  form: PropTypes.any,
  initialValues: PropTypes.object,
  name: PropTypes.string,
  validateMessages: PropTypes.object,
  validateTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  onValuesChange: PropTypes.func,
  onFieldsChange: PropTypes.func,

  // UI
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  wrapperCol: PropTypes.object,
  labelCol: PropTypes.object,
  labelAlign: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  colon: PropTypes.bool,
  hideRequiredMark: PropTypes.bool,
  scrollToFirstError: PropTypes.bool,
};
