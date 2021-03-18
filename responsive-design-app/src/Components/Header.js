import React, {Component} from 'react'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            menu: 'closed'
        }
    }

    showMenu = () => {
        if(this.state.menu === 'closed') {
            this.setState({menu: 'open'})
        } else {
            this.setState({menu: 'closed'})
        }
    }

    render() {
        return(
            <div className='header-menu'>
                <header>
                    <h1 className='title'>Start Bootstrap</h1>
                    <button className='menu-button' onClick={() => this.showMenu()}>
                        <h2>Menu</h2>
                        <div className='menu-icon'>
                            <div className='bar'></div>
                            <div className='bar'></div>
                            <div className='bar'></div>
                        </div>
                    </button>
                </header>
                <ul className={this.state.menu === 'closed' ? 'closed' : 'open'}>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}