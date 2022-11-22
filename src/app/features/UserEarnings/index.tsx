import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { withBoundary } from "../../../core/hoc/withBoundary";
import { ValueDescriptor } from "../../components/ValueDescriptor";

import { useUser } from "../../../core/hooks/useUser";
import { Wrapper } from "./styles";

export function UserEarningsComponent() {
  const { user, fetchDetailedUser } = useUser();

  useEffect(() => {
    fetchDetailedUser(7);
  }, [fetchDetailedUser]);

  if (!user) {
    return (
      <Wrapper style={{ height: 123 }}>
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
      </Wrapper>
    );
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
