import { getLoginUser } from "@/actions/userAction";
import { useQuery } from "@tanstack/react-query";

export const useGetLoginUser = () => {
  return useQuery({
    queryKey: ["GET_LOGIN_USER"],
    queryFn: async () => await getLoginUser(),
  });
};
