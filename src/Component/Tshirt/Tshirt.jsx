import React from 'react';

const Tshirt = ({tshirt}) => {
const {_id,index,price,picture,gender}=tshirt
    return (
        <div>
            <p>{_id}</p>
        </div>
    );
};

export default Tshirt;