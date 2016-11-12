import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCompanies } from 'actions/index'

import Company from 'stupid_components/company'

import 'styles/companies'

function mapStoreToProps(store) {
    return { companies: store.companies }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCompanies }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class CompaniesPage extends React.Component {
    componentWillMount() {
        this.props.getCompanies()
    }
    render () {
        console.log(this.props)
        return (
            <div className="companies-page">
                {this.props.companies.index.map((company) => {
                    return <Company key={company.id} company={company} />}
                )}
            </div>
        )
    }
}