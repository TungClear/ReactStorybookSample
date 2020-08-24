# ReactApp

1. Create app by CRA: yarn create react-app antd-demo OR npx create-react-app antd-demo
2. Add antd: yarn add antd
3. Add lint: 
    - yarn add -D eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier
    - add file .prettierignore, .prettierrc.json, .eslintignore, .eslintrc.json
3. Add craco: yarn add @craco/craco, yarn add craco-less
4. Create craco.config.js
5. Install storybook: npx -p @storybook/cli sb init
6. Add preset antd for overwriting load config: yarn add -D @storybook/preset-ant-design
7. Change main.js in .storybook: 
      `
      module.exports = {
        stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
        addons: [
          '@storybook/addon-links',
          '@storybook/addon-essentials',
          {
            name: '@storybook/preset-create-react-app',
            options: {
              craOverrides: {
                fileLoaderExcludes: ['less'],
              },
            },
          },
          {
            name: '@storybook/preset-ant-design',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#1DA57A',
                  'border-radius-base': '2px',
                },
              },
            },
          },
        ],
      };
      `
8. Add less to storybook by import to preview.js: import 'antd/dist/antd.less'
