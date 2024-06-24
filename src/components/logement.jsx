import React from 'react';

const Appart = ({title, name, picture,location, tag}) => {
    return <div>

        <div className='info-content'>
            <div className='titleUser'>
                <h2 className='appartTitle'>{title}</h2>
                <p className='userName'>{name}</p>
                <img className='userPicture' src= {picture} alt= {picture}/>
            </div>
            <div className='location'>
                <p>{location}</p>
            </div>
            <div className='tagStar'>
                <p>{tag}</p>
                <i></i>
            </div>
        </div>
    </div>
}

export default Appart