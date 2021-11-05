// Write your Character component here
import React from 'react';
import Characters from './Characters';

const Character = (props) => {
    const newCharacter = props;

    return (
        <div>
            <h2>{newCharacter.name}</h2>

        </div>
    );
};

export default Character;