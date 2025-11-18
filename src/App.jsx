import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './projects/profile/Home'
import ThirtyBirthday from './projects/thirty/ThirtyBirthday'

/**
 * Main App Router
 * 
 * This monorepo structure allows multiple projects to coexist:
 * - Simple projects: Add as routes here (e.g., /30th)
 * - Complex projects: Can be in separate repos with Netlify proxy redirects
 * 
 * To add a new simple project:
 * 1. Create folder in src/projects/[project-name]/
 * 2. Add route here: <Route path="/[project-name]" element={<ProjectComponent />} />
 * 3. No Netlify config needed - works automatically!
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/30th" element={<ThirtyBirthday />} />
      {/* Future projects can be added here, e.g.:
          <Route path="/chess" element={<ChessApp />} />
      */}
    </Routes>
  )
}

export default App

