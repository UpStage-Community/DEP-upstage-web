import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProductions } from 'api/index'

import Production from 'stupid_components/production'

import 'styles/productions'

function mapStateToProps(store) {
  return { productions: store.productions };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProductions }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)

export default class ProductionsPage extends React.Component {
    componentWillMount() {
        this.props.getProductions()
    }
    render() {
        return (
            <div className="productions-page">
                
                <div className="productions-container">
                    {this.props.productions.index.map((production) => {
                        return <Production key={production.id} production={production} />}
                    )}
                </div>
            </div>
        )
    }
}