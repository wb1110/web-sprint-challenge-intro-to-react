// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Character = (props) => {
    const newCharacter = props;

    const MainContainer = styled.div`
        display:flex;
        justify-content: center;
    `;
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;    
        border: solid black;
        width: 60%;
        padding: 0 1%;
        margin: 1% 0;
    `;
    const Names = styled.h2`
        color: white;
        font-family: 'Press Start 2P', cursive;
    `;

    const Birth = styled.h2`
        background-color: grey;
        padding: 1%;
        border-radius: 20px;
        color: purple;
    `;

    return (
        <MainContainer>
        <Container>
            <Names>{newCharacter.name}</Names>
            <Birth>{newCharacter.birth_year}</Birth>
        </Container>
        </MainContainer>
    );
};

export default Character;