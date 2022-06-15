import React from 'react';
import { Meta } from '@storybook/react';

import { Welcome } from '../src';

export default {
  component: Welcome,
  title: 'components/Welcome',
} as Meta;

export const generated = () => {
  return <Welcome />;
};
