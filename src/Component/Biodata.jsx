import React, { Component } from 'react'

//latihan membuat props
export default class Biodata extends Component {
    render() {
        return (
            <div>
                <h3>nama: {this.props.nama}</h3>
                <h3>umur: {this.props.umur}</h3>
            </div>
        )
    }
}
