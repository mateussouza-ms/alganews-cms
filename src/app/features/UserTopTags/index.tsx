import { useEffect, useState } from "react";
import { Metric } from "../../../sdk/@types";
import { MetricService } from "../../../sdk/services/MetricService";
import { CircleChart } from "../../components/CircleChart";
import { Wrapper } from "./styles";

export function UserTopTags() {
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
