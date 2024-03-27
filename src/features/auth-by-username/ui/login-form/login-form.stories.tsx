import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import { LoginForm } from './login-form';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '1223232',
};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: false,
    },
})];

export const WithError = Template.bind({});
WithError.args = {
    placeholder: 'Type text',
    value: '1223232',
};
WithError.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: false,
        error: 'Error',
    },
})];

export const Loading = Template.bind({});
Loading.args = {
    placeholder: 'Type text',
    value: '1223232',
};
Loading.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
    },
})];
