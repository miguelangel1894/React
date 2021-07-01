import React, {Component} from 'react'
import RenderizarElemento from './RenderizarElemento'
import Eventos from './eventos'

function ComponenteHijo(props) {
    return <h1>{props.contador}</h1>
    
}

export default class estado extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            session: false,
            roles: ['admin', 'editor', 'userPremium']
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
    }

    render(){
        return(
            <div>
                <h1>el state</h1>
                <h2>{this.state.contador}</h2>
                <ComponenteHijo contador={this.state.contador} />
                {this.state.session?<RenderizarElemento/>: <ComponenteHijo/>}

                <ol>
                    {this.state.roles.map((el, index) =>(
                        <li key={index}>{el}</li>
                    ))}
                </ol>

                <Eventos/>
                
            </div>
              )      
            };
    



}