import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-providers/types';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import Navbar from './navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [StoreDecorator({
    user: {
        authData: { username: 'Husniddin', id: '1' },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: { username: 'Husniddin', id: '1' },
    },
})];
