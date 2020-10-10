import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const P = styled.p`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.secondary};
    user-select: none;
    font-size: 16px;
`

const Info = ({children, className}) => {
    return (
        <P className={className}>
            {children}
        </P>
    );
};

Info.propTypes = {
    children: PropTypes.string.isRequired
}

export default Info;