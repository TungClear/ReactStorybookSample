import React from 'react';
import { MButton } from '../components/General/Button';
import { SearchOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export default {
  title: 'Antd/General/Button',
  component: MButton,
};

const Template = args => <MButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'primary',
  label: 'Search',
  icon: <SearchOutlined />
};

export const IconTooltip = () => (
  <Tooltip title="search">
    <MButton type="primary" shape="circle" icon={<SearchOutlined />} />
  </Tooltip>
)
