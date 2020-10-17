import React,{ Component } from "react";

export default class Bomb extends Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render() {
        const goBoom = this.state.secondsLeft
        if (goBoom === 0) {
           return ( 'Boom!'
           )
        } else {
            return (goBoom + ' seconds left before I go boom!'
            )
        }

        
    }
}
