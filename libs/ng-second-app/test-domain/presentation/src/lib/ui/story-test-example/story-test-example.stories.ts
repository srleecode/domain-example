import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StoryTestExampleComponent } from './story-test-example.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: StoryTestExampleComponent,
  title: 'Ng Second App/Test Domain/Ui Story Test Example',
  decorators: [
    moduleMetadata({
      imports: [StoryTestExampleComponent, ...GLOBAL_MOUNT_OPTIONS.imports],
    }),
  ],
} as Meta;

export const Default: Story = () => ({});
