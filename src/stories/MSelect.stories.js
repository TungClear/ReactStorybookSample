import React, { useState } from 'react';
import { MSelect } from '../components/DataEntry/Select';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

const { Option, OptGroup } = Select;

export default {
  title: 'Antd/DataEntry/Select',
  component: MSelect,
};

const Template = args => <MSelect {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  defaultValue: null,
  style: { width: 120 },
  children: (
    <>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </>
  ),
};

export const Multiple = Template.bind({});
const customRenderOption = () => {
  const options = [
    { key: '🇨🇳', label: 'China (中国)' },
    { key: '🇺🇸', label: 'USA (美国)' },
    { key: '🇯🇵', label: 'Japan (日本)' },
    { key: '🇰🇷', label: 'Korea (韩国)' },
  ];
  return options.map((item, index) => (
    <Option value={item.key} label={item.label} key={index}>
      <div className="demo-option-label-item">
        <span role="img" aria-label={item.key}>{` ${item.key} `}</span>
        {item.label}
      </div>
    </Option>
  ));
};

Multiple.args = {
  mode: 'multiple',
  style: { width: '100%' },
  placeholder: 'Please select',
  defaultValue: ['🇨🇳', '🇺🇸'],
  optionLabelProp: 'value',
  children: customRenderOption(),
};

export const OptionGroup = Template.bind({});
OptionGroup.args = {
  style: { width: '100%' },
  defaultValue: 'lucy',
  children: (
    <>
      <OptGroup label="Manager">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </OptGroup>
      <OptGroup label="Engineer">
        <Option value="Yiminghe">yiminghe</Option>
      </OptGroup>
    </>
  ),
};

export const HideSelectedItem = () => {
  const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
  const renderChild = filteredOptions.map(item => (
    <Option key={item} value={item}>
      {item}
    </Option>
  ));
  return (
    <MSelect
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={value => setSelectedItems(value)}
      style={{ width: '100%' }}
    >
      {renderChild}
    </MSelect>
  );
};

export const SearchAndSelectWithFetch = () => {
  const [user, setUser] = useState({
    data: [],
    selectedItems: [],
    loading: false,
  });

  async function fetchMyAPI() {
    setUser({ ...user, loading: true });
    const response = await fetch('https://randomuser.me/api/?results=10&inc=login,name');
    const result = await response.json();
    const data = result.results.map(user => ({
      text: `${user.name.first} ${user.name.last}`,
      value: user.login.username,
    }));
    setUser({ ...user, data, loading: false });
  }

  const handleChange = value => {
    setUser({
      selectedItems: value,
      data: [],
      loading: false,
    });
  };

  return (
    <MSelect
      mode="multiple"
      labelInValue
      value={user.selectedItems}
      placeholder="Select users"
      notFoundContent={user.loading ? <Spin size="small" /> : null}
      filterOption={false} // true nếu filter không dùng API
      onSearch={debounce(fetchMyAPI, 500)}
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {user.data.map(d => (
        <Option key={d.value}>{d.text}</Option>
      ))}
    </MSelect>
  );
};
