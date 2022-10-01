import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { withBoundary } from "../../../core/hoc/withBoundary";
import { Metric } from "../../../sdk/@types";
import { MetricService } from "../../../sdk/services/MetricService";
import { CircleChart } from "../../components/CircleChart";

import { Wrapper } from "./styles";

export function UserTopTagsComponent() {
  const [top3Tags, setTop3Tags] = useState<Metric.EditorTagRatio>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getTop3Tags()
      .then(setTop3Tags)
      .catch((err) => setError(new Error(err.message)));
  }, []);

  if (error) {
    throw error;
  }

  if (!top3Tags.length) {
    return (
      <Wrapper>
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {top3Tags.map((tag, index) => (
        <CircleChart
          key={tag.tagName}
          progress={tag.percentage}
          size={88}
          caption={tag.tagName}
          theme={index === 0 ? "primary" : "default"}
        />
      ))}
    </Wrapper>
  );
}

export const UserTopTags = withBoundary(
  UserTopTagsComponent,
  "tags mais utilizadas"
);
