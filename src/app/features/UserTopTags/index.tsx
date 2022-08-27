import { CircleChart } from "../../components/CircleChart";
import { Wrapper } from "./styles";

export function UserTopTags() {
  return (
    <Wrapper>
      <CircleChart
        progress={80}
        size={88}
        caption="Javascript"
        theme="primary"
      />
      <CircleChart progress={60} size={88} caption="Java" />
      <CircleChart progress={20} size={88} caption="Scrum" />
    </Wrapper>
  );
}
