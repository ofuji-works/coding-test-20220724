import { useCallback, useState } from "react"

import { getPopulations, Error, PopulationsResponse } from "apis"

import type { PopulationData } from "../types"

export type ReturnUsePopulationData = {
  populationData: PopulationData[]
  error: Error | null
  addPopulationData: (prefCode: number, prefName: string) => void
  removePopulationData: (prefName: string) => void
}

/**
 * @summary RESAS API - 都道府県一覧取得
 * @returns {ReturnUsePopulationData}
 */
export const usePopulationData = (): ReturnUsePopulationData => {
  /**
   * @type {PopulationData[]}
   */
  const [populationData, setPopulationData] = useState<PopulationData[]>([])
  /**
   * @type {ApiError|null}
   */
  const [error, setError] = useState<Error | null>(null)

  const targetDataLabel = "総人口"

  const addPopulationData = useCallback(
    (prefCode: number, prefName: string) => {
      setError(null)
      getPopulations(prefCode)
        .then((res: PopulationsResponse) => {
          const newData: PopulationData = {
            name: prefName,
            data:
              res.data.result.data.find((d) => d.label === targetDataLabel)
                ?.data ?? [],
          }
          setPopulationData((data) => [...data, newData])
        })
        .catch((err: Error) => {
          setError(err)
        })
    },
    [],
  )

  const removePopulationData = useCallback((prefName: string) => {
    setPopulationData((data) => data.filter((d) => d.name !== prefName))
  }, [])

  return {
    populationData,
    error,
    addPopulationData,
    removePopulationData,
  }
}
