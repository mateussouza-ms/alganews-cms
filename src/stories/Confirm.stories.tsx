import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Confirm } from "../app/components/Confirm";

export default {
  title: "Example/Confirm",
  component: Confirm,
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Deseja realmente sair?",
  onConfirm: () => {},
  onCancel: () => {},
};
