import React from 'react';
import {STImg, StList} from './styled';
// @ts-ignore
import personLogo from '../../public/person.png';

type TProps = {
    name: string
}

const ListItem = ({name}: TProps) => {
    return(
        <StList>
            <STImg src={personLogo} />
            <p>{name}</p>
        </StList>
    );};

export default ListItem;
