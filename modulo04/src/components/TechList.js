import React, { Component } from 'react'
import TechItem from './TechItem'
class TechList extends Component {

    state = {
        newTech: '',
        techs: []
    }

    // Ciclo de Vida
    // Execultado assim que o componente aparare na tela  consumundo api
    componentDidMount() {

        const techs = localStorage.getItem('techs')

        if (techs) {
            this.setState({ techs: JSON.parse(techs) })
        }

    }

    // Execultado sempre que houver alteração nas props pu estados
    componentDidUpdate(prevProps, prevSate) {
        // this.props,this.state

        if (prevSate !== this.setState.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }


    }

    // Execultado quando o component deixa de existir
    componentWillMount() {

    }


    handleInputChange = e => {

        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {

        e.preventDefault()
        this.setState({

            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        })


    }

    handleDelete = (tech) => {

        this.setState({ techs: this.state.techs.filter(t => t !== tech) })

    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem
                            key={tech}
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)} />
                    ))}
                </ul>

                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />

                <button type="submit">Enviar</button>

            </form>
        )

    }
}

export default TechList