import { lazy, Suspense } from "react"

import { Layout } from "components"

const Resas = lazy(() => import("features/resas"))

function App() {
  return (
    <Layout title="都道府県別の総人口推移グラフ">
      <Suspense>
        <Resas />
      </Suspense>
    </Layout>
  )
}

export default App
