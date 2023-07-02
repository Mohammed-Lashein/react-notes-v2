import {HashRouter, Routes, Route} from 'react-router-dom';
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'

import { useState } from 'react';
const App = () => {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  return (
    <main id="app">
    <HashRouter> 
    <Routes>
      <Route path='/' element={<Notes notes={notes}/>} />
      <Route path='/create-note' element={<CreateNote setNotes={setNotes}/>} />
      <Route path='/edit-note/:id' element={<EditNote/>} />
    </Routes>
    </HashRouter>
    </main>
  )
}
export default App
