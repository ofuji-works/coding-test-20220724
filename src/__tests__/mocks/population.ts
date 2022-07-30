import type { ApiResponse } from "apis"

export const population = {
  boundaryYear: 2015,
  data: [
    {
      label: "総人口",
      data: [
        {
          year: 1980,
          value: 12817,
        },
        {
          year: 1985,
          value: 12707,
        },
        {
          year: 1990,
          value: 12571,
        },
        {
          year: 1995,
          value: 12602,
        },
        {
          year: 2000,
          value: 12199,
        },
        {
          year: 2005,
          value: 11518,
        },
        {
          year: 2010,
          value: 10888,
        },
        {
          year: 2015,
          value: 10133,
        },
        {
          year: 2020,
          value: 9275,
        },
        {
          year: 2025,
          value: 8431,
        },
        {
          year: 2030,
          value: 7610,
        },
        {
          year: 2035,
          value: 6816,
        },
        {
          year: 2040,
          value: 6048,
        },
        {
          year: 2045,
          value: 5324,
        },
      ],
    },
  ],
}

export const populationApiResponse: ApiResponse<{
  boundaryYear: number
  data: {
    label: string
    data: {
      year: number
      value: number
    }[]
  }[]
}> = {
  message: "",
  result: population,
}
