// client/src/App.js
import { Route, Routes } from "react-router-dom"
import Calendar from "./components/Calendar"
import Task from "./components/Task"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/task" element={<Task />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App;
