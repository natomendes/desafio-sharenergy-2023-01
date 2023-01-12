import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { Router } from '@/presentation/components'

ReactDOMClient
  .createRoot(document.getElementById('main'))
  .render(<Router />)