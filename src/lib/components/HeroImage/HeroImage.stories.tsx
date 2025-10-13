import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Media/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    height: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/seed/hero/1200/600',
    title: 'Welcome',
    height: 280,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://picsum.photos/seed/hero2/1200/600',
    title: 'Disabled',
    height: 280,
    disabled: true,
  },
};
