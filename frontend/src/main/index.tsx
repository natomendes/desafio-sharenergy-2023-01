import ReactDOMClient from 'react-dom/client'
import { Router } from '@/main/router'

ReactDOMClient
  .createRoot(document.getElementById('main'))
  .render(<Router />)
