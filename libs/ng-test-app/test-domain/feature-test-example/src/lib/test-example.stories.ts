import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
  FeatureTestExampleComponent,
  NgTestAppTestDomainFeatureTestExampleModule,
} from './test-example.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: FeatureTestExampleComponent,
  title: 'NgTestApp/TestDomain/FeatureTestExample',
  decorators: [
    moduleMetadata({
      imports: [
        NgTestAppTestDomainFeatureTestExampleModule,
        ...GLOBAL_MOUNT_OPTIONS.imports,
      ],
    }),
  ],
} as Meta;

const Template: Story<FeatureTestExampleComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
