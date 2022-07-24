import type { AxiosResponse, AxiosError } from "axios"

export type ApiResponse<T> = AxiosResponse<{
  message: string | null
  result: T
}>

export type ApiError = AxiosError
