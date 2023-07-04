import {HashRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'

import { useState } from 'react';
const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  /* The useEffect will run on any change in the notes array  */

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
