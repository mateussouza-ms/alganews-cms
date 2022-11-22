import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { withBoundary } from "../../../core/hoc/withBoundary";
import { CircleChart } from "../../components/CircleChart";

import { useTopTags } from "../../../core/hooks/useTopTags";
import { Wrapper } from "./styles";

export function UserTopTagsComponent() {
  const { topTags, fetchTopTags } = useTopTags();

  useEffect(() => {
    fetchTopTags();
  }, [fetchTopTags]);

  if (!topTags.length) {
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
      {topTags.map((tag, index) => (
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
