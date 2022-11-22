import { User, UserService } from "ms-alganews-sdk";
import { useCallback, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<User.Detailed>();

  const fetchDetailedUser = useCallback(async (userId: number) => {
    await UserService.getDetailedUser(userId).then(setUser);
  }, []);

  return { user, fetchDetailedUser };
}
