import React, { Component } from 'react';
import InfoCard from '../component/InfoCard';
import { styled } from 'styled-components';

class Initiate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            infoCards: [],
        };
    }

    // Mounting
    componentDidMount() {
        console.log('Mounting');
        this.setState({
            infoCards: [<InfoCard key="initial" message="👶 Mounting!" />],
        });
    }

    // Updating
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log(`Updating - New count: ${this.state.count}`);
        }
    }

    // Unmounting
    componentWillUnmount() {
        console.log('Component will unmount');
    }

    // Count 증가 및 InfoCard 추가
    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
            infoCards: [...prevState.infoCards, <InfoCard key={prevState.count + 1} message={`🏃Updating! ${prevState.count + 1}`} />,]
        }));
    };

    // 최신 InfoCard 제거 및 Count 감소
    removeLatestCard = () => {
        if (this.state.infoCards.length > 0) {
            this.setState((prevState) => ({
                count: prevState.count - 1,
                infoCards: prevState.infoCards.slice(0, -1),
            }));
        }
    };

    render() {
        return (
            <Container>
                <Content>
                    <h1>Count: {this.state.count}</h1>
                    <ButtonContainer>
                        <Button onClick={this.incrementCount}>🏃 Updating</Button>
                        <Button onClick={this.removeLatestCard} disabled={this.state.infoCards.length === 1}>
                            🦴 Unmounting
                        </Button>
                    </ButtonContainer>
                    <CardContainer>
                        {this.state.infoCards}
                    </CardContainer>
                </Content>
            </Container>
        );
    }
}

export default Initiate;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%; 
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Button = styled.button`
    margin-right: 0.625rem;
    padding: 0.625rem 1.25rem; 
    background-color: orange;
    font-weight: bold;
    color: black;
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;

    &:disabled {
        color: white;
        background-color: grey;
        cursor: not-allowed;
    }

    &:hover:enabled {
        background-color: #FF7F00;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
    overflow-x: auto; 
    white-space: nowrap; 
    padding-bottom: 1rem; 
    width: 100%;
`;
