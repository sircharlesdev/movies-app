import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Base de datos de películas
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                Listar películas
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Agregar película
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links