//kalau tidak ada data yang diubah disarankan pakai stateless component, kalau ada, pakai statefull component
import React, { Component } from 'react'
//contoh stateless component, dia gak pakai this
export default class NewBiodata extends Component {
    render (props) {
        return (
            <div>
            <h3>nama: {props.nama}</h3>
            <h3>umur: {props.umur}</h3>
            <h3>hobi: {props.hobi}</h3>
        </div>
        )
    }
}
