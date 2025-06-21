import type {
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

export type ReactQueryOptions<
  TData = unknown,
  TError = unknown,
  TQueryFnData = TData
> = Omit<UseQueryOptions<TQueryFnData, TError, TData>, "queryKey" | "queryFn">;

export type ReactMutationOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">;
