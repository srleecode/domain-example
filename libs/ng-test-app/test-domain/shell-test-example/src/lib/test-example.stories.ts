import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
  ShellTestExampleComponent,
  NgTestAppTestDomainShellTestExampleModule,
} from './test-example.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: ShellTestExampleComponent,
  title: 'NgTestApp/TestDomain/ShellTestExample',
  decorators: [
    moduleMetadata({
      imports: [
        NgTestAppTestDomainShellTestExampleModule,
        ...GLOBAL_MOUNT_OPTIONS.imports,
      ],
    }),
  ],
} as Meta;

const Template: Story<ShellTestExampleComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
