import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProductions } from 'api/index'

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
        console.log(this.props)
        return (
            <div className="productions-page">
                Productions!
                {this.props.productions.index.map((production) => {
                    return (
                        <div>
                            {production.title}
                        </div>
                    )}
                )}
            </div>
        )
    }
}