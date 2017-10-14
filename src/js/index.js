import React from 'react'
import ReactDom from 'react-dom'
// import {install} from 'offline-plugin/runtime'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import '../../src/css/base.css'
import App from '../../components/App/App'

ReactDom.render(<App />, document.getElementById('app'))

if(process.env.NODE_ENV === 'production'){
    OfflinePluginRuntime.install()
}
