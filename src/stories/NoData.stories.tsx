import { ComponentMeta, ComponentStory } from "@storybook/react";

import { NoData } from "../app/components/NoData";

export default {
  title: "Example/NoData",
  component: NoData,
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FixedHeight = Template.bind({});
FixedHeight.args = {
  height: 240,
};
