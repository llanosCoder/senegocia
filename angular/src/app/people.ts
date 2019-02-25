import { Person } from './person';

let peopleJSON: any;

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        peopleJSON = json;
    });

export const PEOPLE: Person[] = peopleJSON;