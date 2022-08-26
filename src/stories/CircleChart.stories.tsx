import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CircleChart } from "../app/components/CircleChart";

export default {
  title: "Example/CircleChart",
  component: CircleChart,
  argTypes: {
    progress: {
      control: "range",
      min: 0,
      max: 100,
    },
  },
} as ComponentMeta<typeof CircleChart>;

const Template: ComponentStory<typeof CircleChart> = (args) => (
  <CircleChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 80,
  size: 88,
  caption: "Mateus",
  theme: "primary",
};
