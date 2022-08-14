import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ErrorDisplay } from "../components/ErrorDisplay";

export default {
  title: "Example/ErrorDisplay",
  component: ErrorDisplay,
} as ComponentMeta<typeof ErrorDisplay>;

const Template: ComponentStory<typeof ErrorDisplay> = (args) => (
  <ErrorDisplay {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: "Ocorreu um erro",
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: "Falha na comunicação com o servidor",
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};
