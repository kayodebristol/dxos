//
// Copyright 2022 DXOS.org
//

import '@dxos-theme';

import { Loading } from './Loading';

export default {
  title: 'plugin-github/Loading',
  component: Loading,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'neutral'],
    },
  },
};

export const Default = { args: { label: 'Loading', size: 'md', color: 'primary' } };
export const Small = { args: { ...Default.args, size: 'sm' } };
export const Neutral = { args: { ...Default.args, color: 'neutral' } };
export const Large = { args: { ...Default.args, size: 'lg' } };
export const ExtraLarge = { args: { ...Default.args, size: 'xl' } };
