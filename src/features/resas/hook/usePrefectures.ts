import { useEffect, useState } from "react"

import { getPrefectures, Error, PrefecturesResponse } from "apis"

import type { Prefecture } from "../types"

export type ReturnUsePrefectures = {
  prefectures: Prefecture[]
  loading: boolean
  error: Error | null
}

/**
 * @summary RESAS API - 都道府県一覧取得
 * @returns {ReturnUsePrefectures}
 */
export const usePrefectures = (): ReturnUsePrefectures => {
  /**
   * @type {Prefecture[]}
   */
  const [prefectures, setPrefetures] = useState<Prefecture[]>([])
  /**
   * @type {boolean}
   */
  const [loading, setLoading] = useState<boolean>(false)
  /**
   * @type {ApiError|null}
   */
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getPrefectures()
      .then((res: PrefecturesResponse) => {
        setPrefetures(res.data.result)
      })
      .catch((err: Error) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { prefectures, loading, error }
}
