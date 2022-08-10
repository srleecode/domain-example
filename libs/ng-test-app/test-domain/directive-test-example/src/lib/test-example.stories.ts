import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NgTestAppTestDomainDirectiveTestExampleModule } from './test-example.directive';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';
import { TestModule, TestComponent } from './test.component';

export default {
  component: TestComponent,
  title: 'NgTestApp/TestDomain/DirectiveTestExample',
  decorators: [
    moduleMetadata({
      imports: [
        NgTestAppTestDomainDirectiveTestExampleModule,
        TestModule,
        ...GLOBAL_MOUNT_OPTIONS.imports,
      ],
    }),
  ],
} as Meta;

const Template: Story<TestComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
