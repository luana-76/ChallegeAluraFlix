
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Cabecalho } from "./paginas/componentes/header/header";
import { NewVideo } from "./paginas/newVideo/FormNewVideo";
import { ParteSuperior } from "./paginas/index/main";
import { Final } from "./paginas/componentes/footer/footer";
import { NewCategory } from "./paginas/categoryVideo/categoryPart";

function App() {

  return (

    <BrowserRouter>

      <Cabecalho/>
      
      <Routes>
     
        <Route path='/' element={<ParteSuperior/>}/>
        <Route path='/newVideo' element={<NewVideo/>}/>
        <Route path='/newCategory' element={<NewCategory/>}/>
    
      </Routes>

      <Final/>

    </BrowserRouter>

  );
}

export default App;
