import {HashRouter, Routes, Route} from 'react-router-dom';
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
const App = () => {
  return (
    <main id="app">
    <HashRouter> 
    <Routes>
      <Route path='/' element={<Notes/>} />
      <Route path='/create-note' element={<CreateNote/>} />
      <Route path='/edit-note/:id' element={<EditNote/>} />
    </Routes>
    </HashRouter>
    </main>
  )
}
export default App
