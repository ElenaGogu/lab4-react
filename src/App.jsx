import GalerieNature from "./Components/GalerieNature/GalerieNature"
import imaginiNatura from "./data/images.json"

function App() {
  return (
    <div>
      <GalerieNature
        imagini={imaginiNatura} 
        titlu="Galerie de Natură" 
      />
    </div>
  )
}
export default App
