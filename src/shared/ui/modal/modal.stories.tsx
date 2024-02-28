import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-providers/types';
import { Modal } from './modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Pariatur 
    id sit molestias commodi. Impedit voluptate dolorum
     voluptates ad porro amet veritatis recusandae repellat iste. 
     Itaque deleniti ex incidunt fugiat est iusto laboriosam, quasi quae 
     eligendi voluptatem dolor tenetur pariatur esse nobis delectus. Tempore 
     magnam aperiam reiciendis enim culpa laborum consequuntur?`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Pariatur 
    id sit molestias commodi. Impedit voluptate dolorum
     voluptates ad porro amet veritatis recusandae repellat iste. 
     Itaque deleniti ex incidunt fugiat est iusto laboriosam, quasi quae 
     eligendi voluptatem dolor tenetur pariatur esse nobis delectus. Tempore 
     magnam aperiam reiciendis enim culpa laborum consequuntur?`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
