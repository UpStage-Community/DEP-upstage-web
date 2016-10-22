import React from 'react'

export default class Production extends React.Component {
    render() {
        let { production } = this.props
        return (
            <div className="production card">
                <div className="card-image-container">
                    <a href="/"><img src={ production.image } /></a>
                </div>
                <div className="card-content">
                    <div className="title"><a href="/">{ production.title }</a></div>
                    <div>{ production.short_description } </div>
                    <div><a href='/'>Company: { production.company.name }</a></div>
                    <div>
                        <a href={ production.ticket_url }>
                            Price: { production.price_range }
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}