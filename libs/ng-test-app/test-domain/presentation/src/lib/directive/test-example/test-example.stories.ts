import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';
import { TestComponent } from './test.component';

export default {
  component: TestComponent,
  title: 'Ng Test App/Test Domain/Directive Test Example',
  decorators: [
    moduleMetadata({
      imports: [TestComponent, ...GLOBAL_MOUNT_OPTIONS.imports],
    }),
  ],
} as Meta;

export const Default: Story = () => ({});
