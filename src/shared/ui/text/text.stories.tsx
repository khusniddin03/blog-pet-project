import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-providers/types';
import { Text, TextTheme } from './text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title magna culpa ad velit cupidatat du',
    text: 'Sint mollit esse commodo amet ex velit nostrud. Fugiat cupidatat id pariatur sint voluptate aute eu mollit. Lorem cillum consectetur ad duis. Nostrud excepteur in minim deserunt qui qui dolore nulla nisi. Pariatur do sunt consequat anim ',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title magna culpa ad velit cupidatat du',
    text: 'Sint mollit esse commodo amet ex velit nostrud. Fugiat cupidatat id pariatur sint voluptate aute eu mollit. Lorem cillum consectetur ad duis. Nostrud excepteur in minim deserunt qui qui dolore nulla nisi. Pariatur do sunt consequat anim ',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title magna culpa ad velit cupidatat du',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Sint mollit esse commodo amet ex velit nostrud. Fugiat cupidatat id pariatur sint voluptate aute eu mollit. Lorem cillum consectetur ad duis. Nostrud excepteur in minim deserunt qui qui dolore nulla nisi. Pariatur do sunt consequat anim ',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title magna culpa ad velit cupidatat du',
    text: 'Sint mollit esse commodo amet ex velit nostrud. Fugiat cupidatat id pariatur sint voluptate aute eu mollit. Lorem cillum consectetur ad duis. Nostrud excepteur in minim deserunt qui qui dolore nulla nisi. Pariatur do sunt consequat anim ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title magna culpa ad velit cupidatat du',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Sint mollit esse commodo amet ex velit nostrud. Fugiat cupidatat id pariatur sint voluptate aute eu mollit. Lorem cillum consectetur ad duis. Nostrud excepteur in minim deserunt qui qui dolore nulla nisi. Pariatur do sunt consequat anim ',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
