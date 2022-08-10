import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NgTestAppTestDomainDirectiveSecondTestModule } from './second-test.directive';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';
import { TestModule, TestComponent } from './test.component';

export default {
  component: TestComponent,
  title: 'NgTestApp/TestDomain/DirectiveSecondTest',
  decorators: [
    moduleMetadata({
      imports: [
        NgTestAppTestDomainDirectiveSecondTestModule,
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
