import React, { Component } from 'react'
// state umumnya digunakan jika ada perubahan data
export default class Component4 extends Component {
    state ={
        nama: 'hendriyono',
        umur: 19,
        hobi: 'menabung'
    }

    render() {
        return (
            <div>
                <h3>nama: {this.state.nama}</h3>
                <h3>umur: {this.state.umur}</h3>
                <h3>hobi: {this.state.hobi}</h3>
            </div>
        )
    }
}
