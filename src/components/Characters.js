import React from 'react';
import Character from './Character'

const Characters = (props) => {
    const newChar = props.char;
    console.log(newChar);
    return (
        <div>
            {newChar.map(char => {
                return <Character char={char} key={char.name} name={char.name} birth_year={char.birth_year}/>
            })}
            

        </div>
    );
};

export default Characters;