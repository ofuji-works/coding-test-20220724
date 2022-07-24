import type { AxiosResponse, AxiosError } from "axios"

export type ApiResponse<T> = {
  message: string | null
  result: T
}

export type Response<T> = AxiosResponse<ApiResponse<T>>

export type Error = AxiosError
