import { useEffect, useState } from "react";
import { User } from "../../../sdk/@types";
import { UserService } from "../../../sdk/services/UserService";
import { ValueDescriptor } from "../../components/ValueDescriptor";
import { Wrapper } from "./styles";

export function UserEarnings() {
  const [user, setUser] = useState<User.Detailed>();

  useEffect(() => {
    UserService.getDetailedUser(7).then(setUser);
  }, []);

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
