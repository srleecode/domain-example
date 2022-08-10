import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
  UiTestExampleComponent,
  NgTestAppTestDomainUiTestExampleModule,
} from './test-example.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: UiTestExampleComponent,
  title: 'NgTestApp/TestDomain/UiTestExample',
  decorators: [
    moduleMetadata({
      imports: [
        NgTestAppTestDomainUiTestExampleModule,
        ...GLOBAL_MOUNT_OPTIONS.imports,
      ],
    }),
  ],
} as Meta;

const Template: Story<UiTestExampleComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
