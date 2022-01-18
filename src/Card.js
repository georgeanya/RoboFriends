import React from 'react';

const Card = ({name, id, email, username}) => {
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img alt='robo' src= {`https://robohash.org/${id}`} width='200px' height='200px'/>
            <div>
                <h2>
                    {name}
                </h2>
                <p className='b'>
                    {username}
                </p>
                <p>
                    {email}
                </p>
            </div>
        </div>
    );
}

export default Card;