import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestExampleComponent } from './test-example.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: TestExampleComponent,
  title: 'Ng Test App/Test Domain/Ui Test Example',
  decorators: [
    moduleMetadata({
      imports: [TestExampleComponent, ...GLOBAL_MOUNT_OPTIONS.imports],
    }),
  ],
} as Meta;

export const Default: Story = () => ({});
