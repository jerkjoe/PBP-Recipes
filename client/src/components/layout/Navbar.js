import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
    const onLogout = e => {
        e.preventDefault();
        logout();
    };
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html">
                    <i className="fas fa-code"></i> DevConnector
                </a>
            </h1>
            <ul>
                <li>
                    <a href="profiles.html">Developers</a>
                </li>

                {!loading ? (
                    !isAuthenticated ? (
                        <Fragment>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </Fragment>
                    ) : (
                        <li>
                            <a href="#" onClick={onLogout}>
                                Logout
                            </a>
                        </li>
                    )
                ) : (
                    ''
                )}
            </ul>
        </nav>
    );
};
Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {
    logout
})(Navbar);
