import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Media/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/seed/img/600/360',
    alt: 'Demo',
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://picsum.photos/seed/img2/600/360',
    alt: 'Disabled',
    disabled: true,
  },
};
