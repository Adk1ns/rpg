import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './components/GlobalStyles'
import { Provider as JotaiProvider } from 'jotai'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Themes'
import Trainer from './components/pages/Trainer'

function App() {
  return (
    <JotaiProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles>
          <main>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="train" element={<Trainer />} />
                <Route path="store" element={<p>store</p>} />
              </Routes>
            </BrowserRouter>
          </main>
        </GlobalStyles>
      </ThemeProvider>
    </JotaiProvider>
  )
}

export default App
