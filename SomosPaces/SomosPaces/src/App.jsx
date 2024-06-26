import { Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Sementinha from "./Components/Sementinha"
import TelaIncial from "./Components/TelaInicial"
import SelecaoPacotes from "./Components/SelecaoPacotes"
import Profissionais from './Components/Profissionais'
import Exercicio from './Components/Exercicios'
import MemoryGame from './Components/MemoryGame'
import ExpressionMirror from './Components/ExpressionMirror'
import GTranslate from './Components/GTranslate'
import Comunidade from '../../ChatCopia/client/src/App'


function App(){
    return( 
        <>
    
     <BrowserRouter>
        <Routes>
            <Route path='/TelaInicial' element={ <div><TelaIncial/></div>}/>
            <Route path='/' element={ <div><TelaIncial/></div>}/>
            <Route path='/Sementinha' element={<Sementinha/>}/>
            <Route path='/SelecaoPacotes' element={<SelecaoPacotes/>}/>
            <Route path='/Profissionais' element={<Profissionais/>}/>
            <Route path='/Exercicio' element={<Exercicio/>}/>
            <Route path='/MemoryGame' element={<MemoryGame/>}/>
            <Route path='/ExpressionMirror' element={<ExpressionMirror/>}/>
            <Route path='/Comunidade' element={<Comunidade/>}/>
        </Routes>
     </BrowserRouter>
     <GTranslate/>
        </>
    )   
}

export default App