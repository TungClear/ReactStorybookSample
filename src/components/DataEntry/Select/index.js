import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

export const MSelect = props => {
  return <Select {...props}>{props.children}</Select>;
};

MSelect.propTypes = {
  allowClear: PropTypes.bool,
  autoClearSearchValue: PropTypes.bool,
  autoFocus: PropTypes.bool,
  defaultActiveFirstOption: PropTypes.bool,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  dropdownClassName: PropTypes.string,
  dropdownRender: PropTypes.func,
  dropdownStyle: PropTypes.any,
  filterOption: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  labelInValue: PropTypes.bool, //thêm label vào value --> value từ format string thành {value: string, label: ReactNode}
  listHeight: PropTypes.number,
  maxTagCount: PropTypes.number,
  maxTagTextLength: PropTypes.number,
  tagRender: PropTypes.func, //customize tag render
  mode: PropTypes.string,
  notFoundContent: PropTypes.node,
  options: PropTypes.element,
  optionFilterProp: PropTypes.string,
  optionLabelProp: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  showArrow: PropTypes.bool,
  showSearch: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  suffixIcon: PropTypes.element,
  removeIcon: PropTypes.element,
  clearIcon: PropTypes.element,
  menuItemSelectedIcon: PropTypes.element,
  tokenSeparators: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.any, //current selected option
  virtual: PropTypes.bool, //virtual scroll
  defaultOpen: PropTypes.bool,
  open: PropTypes.bool,
  loading: PropTypes.bool,
  bordered: PropTypes.bool,
  onChange: PropTypes.func, // lấy value props trong thẻ option, nếu không có value sẽ lấy key, if(labelInvalue) giá trị value thành format {value: string, label: ReactNode}
};
