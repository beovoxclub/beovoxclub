import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
`;

const BeovoxClub = styled.div`
    font-size: 36px;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <BeovoxClub>Beovox club</BeovoxClub>
            </Wrapper>
        );
    }
}

export default App;
