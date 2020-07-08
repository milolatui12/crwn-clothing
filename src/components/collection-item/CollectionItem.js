import React from 'react';
import './CollectionItem.scss';
import CustomButton from '../custom-button/CustomButton';

const CollectionItem = ({ id, name, imageUrl, price }) => {
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="button">
                <CustomButton>buy now</CustomButton>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;