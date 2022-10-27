import React from 'react';

export const getServerSideProps = async (context) => {
    const { id } = context.params;
	const response = await fetch(`https://swapi.dev/api/people/${id}`);
	const data = await response.json();

	return {
		props: {
			people: data
		}
	}
};

const PeopleItem = ({people}) => {

    const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = people

    return (
        <div>
            <div>{name}</div>
            <div>{height}</div>
            <div>{mass}</div>
            <div>hair color: {hair_color}</div>
            <div>skin color: {skin_color}</div>
            <div>eye color: {eye_color}</div>
            <div>{birth_year}</div>
            <div>{gender}</div>
        </div>
    );
};

export default PeopleItem;