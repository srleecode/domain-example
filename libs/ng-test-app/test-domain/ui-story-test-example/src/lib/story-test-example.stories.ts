import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
  UiStoryTestExampleComponent,
  NgTestAppTestDomainUiStoryTestExampleModule,
} from './story-test-example.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: UiStoryTestExampleComponent,
  title: 'NgTestApp/TestDomain/UiStoryTestExample',
  decorators: [
    moduleMetadata({
      imports: [
        NgTestAppTestDomainUiStoryTestExampleModule,
        ...GLOBAL_MOUNT_OPTIONS.imports,
      ],
    }),
  ],
} as Meta;

const Template: Story<UiStoryTestExampleComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
