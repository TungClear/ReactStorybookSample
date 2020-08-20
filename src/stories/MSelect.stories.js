import React, { useState } from 'react';
import { MSelect } from '../components/DataEntry/Select';
import { Select } from 'antd';
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
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </>
  ),
};

export const Multiple = Template.bind({});
const customRenderOption = () => {
  const options = [
    {key: '🇨🇳', label: 'China (中国)'},
    {key: '🇺🇸', label: 'USA (美国)'},
    {key: '🇯🇵', label: 'Japan (日本)'},
    {key: '🇰🇷', label: 'Korea (韩国)'}
  ];
  return options.map((item, index) => (
    <Option value={item.key} label={item.label} key={index}>
      <div className="demo-option-label-item">
        <span role="img" aria-label={item.key}> {item.key} </span>
        {item.label}
      </div>
    </Option>
  ))
}

Multiple.args = {
  mode: "multiple",
  style: { width: '100%' },
  placeholder: "Please select",
  defaultValue: ['🇨🇳', '🇺🇸'],
  optionLabelProp: "value",
  children: customRenderOption()
};

export const OptionGroup = Template.bind({});
OptionGroup.args = {
  style: { width: '100%' },
  defaultValue: "lucy",
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
  ))
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
  )
}

// export const SearchAndSelectWithFetch = () => {
//   const [user, setUser] = useState({
//     data: [],
//     value: [],
//     loading: false
//   });
//   useEffect(() => {
//     this.lastFetchId += 1;
//     const fetchId = this.lastFetchId;
//     this.setState({ data: [], fetching: true });
//     fetch('https://randomuser.me/api/?results=5')
//       .then(response => response.json())
//       .then(body => {
//         if (fetchId !== this.lastFetchId) {
//           // for fetch callback order
//           return;
//         }
//         const data = body.results.map(user => ({
//           text: `${user.name.first} ${user.name.last}`,
//           value: user.login.username,
//         }));
//         this.setState({ data, fetching: false });
//       });
//   }, [])
//   return (
//     <MSelect
//       mode="multiple"
//       labelInValue
//       value={value}
//       placeholder="Select users"
//       notFoundContent={fetching ? <Spin size="small" /> : null}
//       filterOption={false}
//       onSearch={this.fetchUser}
//       onChange={this.handleChange}
//       style={{ width: '100%' }}
//     >
//       {renderChild}
//     </MSelect>
//   )
// }
