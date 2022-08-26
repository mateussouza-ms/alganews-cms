import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Chart } from "../app/components/Chart";

const data: Chart.ChartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Receitas",
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: "#0099ff",
      borderColor: "#0099ff",
      yAxisID: "cashflow",
    },
    {
      label: "Despesas",
      data: [400, 500, 450, 700, 300, 1000],
      fill: true,
      backgroundColor: "#274060",
      borderColor: "#274060",
      borderWidth: 0.5,
      yAxisID: "cashflow",
    },
  ],
};

export default {
  title: "Example/Chart",
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  title: "Média de performance nos últimos 12 meses",
};

export const WithoutData = Template.bind({});
WithoutData.args = {
  title: "Média de performance nos últimos 12 meses",
};
