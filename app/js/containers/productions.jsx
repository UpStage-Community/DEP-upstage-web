import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProductions } from 'actions/index'

import Production from 'stupid_components/production'

import 'styles/productions'

function mapStoreToProps(store) {
  return { productions: store.productions };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProductions }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class ProductionsPage extends React.Component {
    componentWillMount() {
        this.props.getProductions()
    }
    render() {
        return (
            <div className="productions-page">
                {this.props.productions.index.map((production) => {
                    return <Production key={production.id} production={production} />}
                )}
            </div>
        )
    }
}