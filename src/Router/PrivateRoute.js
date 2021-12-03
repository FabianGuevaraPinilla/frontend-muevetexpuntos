import { Redirect, Route } from 'react-router'
import { getSesion } from '../Helper/helper';
import React from 'react'


const checkAuth = () => {
    return !getSesion() ? false : true;
}

export default class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            auth: false
        }
    }

    componentWillMount() {
        this.setState({
            auth: checkAuth()  && !this.state.auth
        })
    }

    render() {
        const {component: Component, ...rest} = this.props;
                return (
            <Route
                {...rest}
                render={(props) => {
                    return this.state.auth ? (
                        < Component {...props} />
                    ) : (
                        <Redirect to={{ pathname: "/login", state: { from: this.props.location }}}></Redirect >
                        // <Redirect push to="/login" />
                    );
                }}
            ></Route> 
        );
    }
}
