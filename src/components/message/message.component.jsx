import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { clearError } from '../../redux/user/user.actions';

import { ErrorMessage } from './message.styles';

const Message = ({ error, clearError }) => {
    useEffect(() => {
        return () => {
            clearError();
        }
    }, [clearError])
 
    return (
        <div>
            {
                error ? (
                    <ErrorMessage>{error.message}!</ErrorMessage>
                ) : (
                    <ErrorMessage></ErrorMessage>
                )
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(clearError())
})

export default connect(null, mapDispatchToProps)(Message);