import { api } from "@/lib";
import type { ReactMutationOptions } from "@/types";
import { useMutation } from "@tanstack/react-query";

interface MutationInput {
  name: string;
  username: string;
  email: string;
}

export interface CreateUserResponse {
  id: number;
  message: string;
}

export const useCreateUserMutation = (options?: ReactMutationOptions) => {
  return useMutation({
    mutationKey: ["create_user"],
    mutationFn: async (input: MutationInput) => {
      const response = await api.post<CreateUserResponse>("user", input);
      return response.data;
    },
    ...options,
  });
};
