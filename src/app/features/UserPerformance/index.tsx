import { useEffect, useState } from "react";
import { withBoundary } from "../../../core/hoc/withBoundary";
import { transformEditorMonthlyEarningsIntoChartJs } from "../../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import { MetricService } from "../../../sdk/services/MetricService";
import { Chart, ChartProps } from "../../components/Chart";

function UserPerformanceComponent() {
  const [editorEarnings, setEditorEarnings] = useState<ChartProps["data"]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch((err) => setError(new Error(err.message)));
  }, []);

  if (error) {
    throw error;
  }

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

export const UserPerformance = withBoundary(
  UserPerformanceComponent,
  "performance"
);
