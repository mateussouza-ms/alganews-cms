import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WordPriceCounter } from "../app/components/WordPriceCounter";

export default {
  title: "Example/WordPriceCounter",
  component: WordPriceCounter,
} as ComponentMeta<typeof WordPriceCounter>;

const Template: ComponentStory<typeof WordPriceCounter> = (args) => (
  <WordPriceCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  wordsCount: 5,
  pricePerWord: 10,
};
