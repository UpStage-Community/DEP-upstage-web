import React from 'react'

export default class Company extends React.Component {
    render() {
        let { company } = this.props
        return (
            <div className="card-container">
                <div className="company card">
                    <div className="card-image-container">
                        <a href="/"><img src={ company.image } /></a>
                    </div>
                    <div className="card-content">
                        <div className="title"><a href="/">{ company.name }</a></div>
                        <div>{ company.short_description } </div>
                        <div>{ company.productions.length } Upcoming Production{company.productions.length > 1 ? "s" : ""}</div>
                    </div>
                </div>
            </div>
        )
    }
}