import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { inputType } from '../../../constants';

export const MInput = ({type, ...props}) => {
  switch (type) {
    case inputType.search:
      return <Input.Search {...props} />
    case inputType.textArea:
      return <Input.TextArea {...props}/>
    case inputType.group:
      return (
        <Input.Group {...props}>
          {props.children}
        </Input.Group>
      )
    case inputType.password:
      return <Input.Password {...props} />
    default:
      return <Input {...props} />;
  }
};

MInput.propTypes = {
  // type: PropTypes.oneOf(["search", "password", "textArea", "group"]),
  addonBefore: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  addonAfter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  bordered: PropTypes.bool,
  allowClear: PropTypes.bool,
  onChange: PropTypes.func,
  enterButton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ])
};

MInput.defaultProps = {
  onChange: undefined,
};
