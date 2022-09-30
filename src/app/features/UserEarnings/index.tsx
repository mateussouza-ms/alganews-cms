import { useEffect, useState } from "react";
import { withBoundary } from "../../../core/hoc/withBoundary";
import { User } from "../../../sdk/@types";
import { UserService } from "../../../sdk/services/UserService";
import { ValueDescriptor } from "../../components/ValueDescriptor";
import { Wrapper } from "./styles";

export function UserEarningsComponent() {
  const [user, setUser] = useState<User.Detailed>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    UserService.getDetailedUser(7)
      .then(setUser)
      .catch((err) => setError(new Error(err.message)));
  }, []);

  if (error) {
    throw error;
  }

  if (!user) {
    return null;
  }

  return (
    <Wrapper>
      <ValueDescriptor
        color="primary"
        description="Ganhos no mês"
        value={user.metrics.monthlyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="Ganhos na semana"
        value={user.metrics.weeklyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Ganhos de sempre"
        value={user.metrics.lifetimeEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Total de palavras"
        value={user.metrics.lifetimeWords}
      />
    </Wrapper>
  );
}

export const UserEarnings = withBoundary(UserEarningsComponent, "ganhos");
