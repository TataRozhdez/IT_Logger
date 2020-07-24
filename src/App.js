import React, { Fragment, useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import Searchbar from './components/layout/Searchbar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogsModal from './components/logs/AddLogsModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })

  return (
    <Fragment>
      <Searchbar />
      <div className="center">
        <AddBtn />
        <AddLogsModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs /> 
      </div>
    </Fragment>
  )
}

export default App
