import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'

const App: React.FC = () => {
  return (
    <div>
      <p className="bg-black text-primary">Test</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)