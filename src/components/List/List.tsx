import React from 'react';
import ListItem from './ListItem';
import { StPeopleList } from "./styled";

type TProps ={
    people: string[]
}

const List = ({people}:TProps) => (<>
    <StPeopleList>{people.map((el, index) => <ListItem name={el} key = {index}/>)}</StPeopleList>
    <div>
        <span>Total amount: {people.length} people on ISS</span>
    </div>
</>

);

export default List;
