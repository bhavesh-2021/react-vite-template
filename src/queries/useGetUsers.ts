import { api } from "@/lib";
import type { ReactQueryOptions } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface UsersData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export const getUsers = () => {
  const queryKey = ["users_list"];
  const queryFn = async () => {
    const response = await api.get<UsersData[]>("/users");
    return response.data;
  };

  return {
    queryKey,
    queryFn,
  };
};

export const useGetUsers = (options: ReactQueryOptions<UsersData[]>) => {
  const { queryKey, queryFn } = getUsers();

  const query = useQuery({ queryKey, queryFn, ...options });

  return query;
};
