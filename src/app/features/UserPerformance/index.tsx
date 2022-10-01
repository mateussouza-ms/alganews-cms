import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    return (
      <div>
        <Skeleton height={227} />
      </div>
    );
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
