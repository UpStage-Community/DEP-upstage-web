import React from 'react'
import { connect } from 'react-redux'

import 'styles/app'

@connect((store) => {
    return {
        app: store.app
    }
})

class App extends React.Component {
    render() {
        console.log(this.props.app.screenSize)
        return (
            <h1>It worked</h1>
        )
    }
}

export default App