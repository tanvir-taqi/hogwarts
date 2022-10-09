import React from 'react';

const SingleTeacher = ({teacher}) => {
    const {name,role,picture} = teacher
    return (
        <div>
            <div className="card w-1/3 bg-base-100 shadow-xl mb-2">
            <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{role}</p>
                </div>
                
            </div>
        </div>
    );
};

export default SingleTeacher;