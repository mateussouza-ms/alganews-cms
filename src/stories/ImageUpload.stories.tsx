import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImageUpload } from "../components/ImageUpload";

export default {
  title: "Example/ImageUpload",
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (args) => (
  <ImageUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Thumbnail do post",
};
