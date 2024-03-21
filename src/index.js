import { createRoot } from 'react-dom/client'
import './styles.css'
import { Logo } from '@pmndrs/branding'
import { App } from './App'

/*
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
*/

function Root() {
  return (
    <>
      <App />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <a href="https://wastedpotential.studio" style={{ position: 'absolute', top: 40, left: 40, fontSize: '15px' }}>
          WASTED POTENTIAL - 100 DAYS OF ART
        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}></div>
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '15px' }} href="#">
        </a>
        <a style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '15px' }} href="#">
          SCROLL UP/DOWN
        </a>
      </div>{' '}
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
