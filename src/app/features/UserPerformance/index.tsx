import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { withBoundary } from "../../../core/hoc/withBoundary";
import { usePerformance } from "../../../core/hooks/usePerformance";
import { Chart } from "../../components/Chart";

function UserPerformanceComponent() {
  const { performance, fetchPerformance } = usePerformance();

  useEffect(() => {
    fetchPerformance();
  }, [fetchPerformance]);

  if (!performance) {
    return (
      <div>
        <Skeleton height={227} />
      </div>
    );
  }

  return (
    <Chart
      title="Média de performance nos últimos 12 meses"
      data={performance}
    />
  );
}

export const UserPerformance = withBoundary(
  UserPerformanceComponent,
  "performance"
);
