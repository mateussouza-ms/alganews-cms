import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MarkdownEditor } from "../app/components/MarkdownEditor";

export default {
  title: "Example/MarkdownEditor",
  component: MarkdownEditor,
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditor> = (args) => (
  <MarkdownEditor />
);

export const Default = Template.bind({});
Default.args = {};
