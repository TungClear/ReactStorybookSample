import React, { useState } from 'react';
import { Form, Select, Modal } from 'antd';
import { MForm } from '../components/DataEntry/Form';
import { MFormItem } from '../components/DataEntry/Form/FormItem';
import { MInput } from '../components/DataEntry/Input';
import { MSelect } from '../components/DataEntry/Select';
import { MButton } from '../components/General/Button';
import styled from 'styled-components';
import { inputType } from '../constants';

const MarginRightButton = styled(MButton)`
  margin-right: 10px;
`;
const { Option } = Select;

export default {
  title: 'Antd/DataEntry/Form',
  component: MForm,
};

// const Template = args => <MForm {...args} />;

export const FormDemo = () => {
  const [visible, setVisible] = useState(false);
  const initialValues = {
    'user-name': '',
    'user-email': '',
    'user-website': '',
    'user-introduction': '',
  };
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
  };

  const onFormFinish = (name, info) => {
    if (name === 'control-hooks') {
      alert(name);
    } else {
      alert(name);
    }
  };

  const handleOk = form => {
    form.submit();
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleAfterClose = form => {
    form.resetFields();
  };

  const ModalForm = ({ initialValues, handleOk, handleCancel, handleAfterClose, ...props }) => {
    const [form] = Form.useForm();
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };

    return (
      <Modal
        {...props}
        onOk={() => handleOk(form)}
        onCancel={() => handleCancel()}
        afterClose={() => handleAfterClose(form)}
      >
        <MForm
          {...layout}
          form={form}
          name="nest-messages"
          initialValues={initialValues}
          validateMessages={validateMessages}
        >
          <MFormItem name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <MInput />
          </MFormItem>
          <MFormItem name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <MInput />
          </MFormItem>
          {/* <MFormItem name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
            <InputNumber />
          </MFormItem> */}
          <MFormItem name={['user', 'website']} label="Website">
            <MInput />
          </MFormItem>
          <MFormItem name={['user', 'introduction']} label="Introduction">
            <MInput type={inputType.textArea} />
          </MFormItem>
          {/* <MFormItem {...tailLayout}>
            <MButton type="primary" htmlType="submit">
              Submit
            </MButton>
          </MFormItem> */}
        </MForm>
      </Modal>
    );
  };

  const FormMethods = () => {
    const [form] = Form.useForm();

    const onReset = () => {
      form.resetFields();
    };
    const onFill = () => {
      form.setFieldsValue({
        note: 'Hello world!',
        gender: 'male',
      });
    };
    const handleChangeSelect = value => {
      switch (value) {
        case 'male':
          form.setFieldsValue({ note: 'Hi, man!' });
          return;
        case 'female':
          form.setFieldsValue({ note: 'Hi, lady!' });
          return;
        case 'other':
          form.setFieldsValue({ note: 'Hi there!' });
          return;
        default:
          return;
      }
    };

    return (
      <MForm {...layout} form={form} name="control-hooks">
        <MFormItem name="note" label="Note" rules={[{ required: true }]}>
          <MInput />
        </MFormItem>
        <MFormItem name="gender" label="Gender" rules={[{ required: true }]}>
          <MSelect placeholder="Select gender" onChange={handleChangeSelect} allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </MSelect>
        </MFormItem>
        <MFormItem
          noStyle
          shouldUpdate={(prev, current) => {
            return prev.gender !== current.gender;
          }}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <MFormItem
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <MInput />
              </MFormItem>
            ) : null
          }
        </MFormItem>
        <MFormItem {...tailLayout}>
          <MarginRightButton type="primary" htmlType="submit">
            Submit
          </MarginRightButton>
          <MarginRightButton type="default" htmlType="button" onClick={onReset}>
            Reset
          </MarginRightButton>
          <MButton type="link" htmlType="button" onClick={onFill}>
            Fill form
          </MButton>
        </MFormItem>
        <MFormItem
          label="User List"
          shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
        >
          {/* {({ getFieldValue }) => {
            const users = getFieldValue('users') || [];
            return users.length ? (
              <ul>
                {users.map((user, index) => (
                  <li key={index} className="user">
                    <Avatar icon={<UserOutlined />} />
                    {user.name} - {user.age}
                  </li>
                ))}
              </ul>
            ) : (
                <Typography.Text className="ant-form-text" type="secondary">
                  ( <SmileOutlined /> No user yet. )
                </Typography.Text>
              );
          }} */}
        </MFormItem>
        <MFormItem {...tailLayout}>
          <MButton htmlType="button" onClick={() => setVisible(true)}>
            Add User
          </MButton>
        </MFormItem>
      </MForm>
    );
  };

  return (
    <Form.Provider onFormFinish={onFormFinish}>
      {/* FormMethods */}
      <FormMethods />

      {/* Nest */}
      <ModalForm
        title="Basic Drawer"
        visible={visible}
        initialValues={initialValues}
        handleOk={handleOk}
        handleCancel={handleCancel}
        afterClose={handleAfterClose}
      />
    </Form.Provider>
  );
};
