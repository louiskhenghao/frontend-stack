import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../storybook/views';
import { TestComponent } from './';

declare let module;

storiesOf('Test Component', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Names', () => (
    <Story>
      <UseCase text="Test" usage="Test storybook">
        <TestComponent />
      </UseCase>
    </Story>
  ));
