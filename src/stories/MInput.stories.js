import React from 'react';
import { MInput } from '../components/DataEntry/Input';
import { Select } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { inputType } from '../constants';

const { Option } = Select;

export default {
  title: 'Antd/DataEntry/Input',
  component: MInput,
};

const Template = args => <MInput {...args} />;

export const Addon = Template.bind({});
Addon.args = {
  addonBefore: selectBefore(),
  addonAfter: selectAfter(),
  defaultValue: "mysite"
};

export const PreSufFix = Template.bind({});
PreSufFix.args = {
  prefix: "http://",
  suffix: ".com",
  defaultValue: "mysite"
};

export const Search = Template.bind({});
Search.args = {
  type: inputType.search,
  placeholder: "input search text",
  suffix: suffix(),
  enterButton: true
};

export const TextArea = Template.bind({});
TextArea.args = {
  type: inputType.textArea,
  rows: 4
};

export const Password = Template.bind({});
Password.args = {
  type: inputType.password,
  placeholder: "input password",
  rows: 4
};

export const Group = Template.bind({});
Group.args = {
  type: inputType.group,
  compact: true,
  children: (
    <>
      <MInput style={{ width: '20%' }} defaultValue="Tung" />
      <MInput style={{ width: '30%' }} defaultValue="Nguyen Xuan" />
    </>
  )
};

function selectBefore() {
  return (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  )
}

function selectAfter() {
  return (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  )
}

function suffix() {
  return (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  )
}
