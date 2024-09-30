import React, { Component } from 'react';
import { styled } from 'styled-components';

class InfoCard extends Component {
    render() {
        return (
            <StyledCard>{this.props.message}</StyledCard>
        );
    }
}

export default InfoCard;

const StyledCard = styled.div`
    border: 0.2rem solid black;
    border-radius: 1rem;
    padding: 6rem 1.5rem;
    font-weight: bold;
`