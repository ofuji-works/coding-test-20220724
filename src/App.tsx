import { Layout } from "components"
import { EnhancedResasDataAnalyze } from "features/resas"

function App() {
  return (
    <Layout title="都道府県別の総人口推移グラフ">
      <EnhancedResasDataAnalyze />
    </Layout>
  )
}

export default App
