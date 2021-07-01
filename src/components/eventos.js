import React, {Component} from 'react'

function Boton (props){
    return <button onClick={props.myOnClick}>hola</button>
}

export default class Eventos extends Component{
    state = {
        contador: 0
    }

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    handleClick = (e, mensaje) => {
        console.log(e)
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Eventos con Property Initializers</h2>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>


                <p>evento sintetico</p>
                <button onClick={(e) =>{
                    this.handleClick(e, 'hola miguelito')
                }}>saludar</button>

                <p>evento personalizado</p>
                <Boton myOnClick={(e) =>
                    this.handleClick(e, 'hola migue desde un evento personalizado')
                }/>
            </div>
        )
    }

}

