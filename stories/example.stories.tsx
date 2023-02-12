import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '../src';

export default {
  title: 'example',
} as Meta;

export const PrimaryButton = () => {
  return <Button>Save</Button>;
};
