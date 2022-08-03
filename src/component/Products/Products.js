import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Knock knock who is there?</h2>
            <p>{user ? user.displayName : "voooooot!!!!!"}</p>
        </div>
    );
};

export default Products;