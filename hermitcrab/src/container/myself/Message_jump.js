import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
export default class Message_jump extends Component {
    constructor() {
        super()
        this.state = {
          link: "3",
          redirect: true
        }
      }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={{
              pathname: '/login',
              state: this.state
            }} />)
          }
        return (
            <div>
                
            </div>
        )
    }
}
