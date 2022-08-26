import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SessionController } from "../app/components/SessionController";

export default {
  title: "Example/SessionController",
  component: SessionController,
} as ComponentMeta<typeof SessionController>;

const Template: ComponentStory<typeof SessionController> = (args) => (
  <SessionController {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Mateus Souza",
  description: "editor há 2 anos",
};
