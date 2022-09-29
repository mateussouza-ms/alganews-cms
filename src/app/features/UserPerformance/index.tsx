import { useEffect, useState } from "react";
import { transformEditorMonthlyEarningsIntoChartJs } from "../../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import { MetricService } from "../../../sdk/services/MetricService";
import { Chart, ChartProps } from "../../components/Chart";

export function UserPerformance() {
  const [editorEarnings, setEditorEarnings] = useState<ChartProps["data"]>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings);
  }, []);

  if (!editorEarnings) {
    return null;
  }
  return (
    <Chart
      title="Média de performance nos últimos 12 meses"
      data={editorEarnings}
    />
  );
}
