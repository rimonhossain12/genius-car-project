import React from 'react';
import mechanic1 from '../../../images/Mechanic/1.jpg';
import mechanic2 from '../../../images/Mechanic/2.jpg';
import mechanic3 from '../../../images/Mechanic/3.jpg';
import mechanic4 from '../../../images/Mechanic/4.jpg';
import mechanic5 from '../../../images/Mechanic/5.jpg';
import Expert from '../Expert/Expert';

const ourExperts = [
    {
        img: mechanic1,
        name: 'Andrew Switch',
        expertize: '-Engine Expert'
    },

    {
        img: mechanic2,
        name: 'Johnn Anderson',
        expertize: '-Polish Expert'
    },
    {
        img: mechanic3,
        name: 'Zakaria Switch',
        expertize: '-coloring Expert'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert'
    },

    {
        img: mechanic5,
        name: 'Bravo Switch',
        expertize: '-Washing Expert'
    },

]



const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    ourExperts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;