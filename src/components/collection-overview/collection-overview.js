import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';

import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.scss';

const collectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview
                        key={id} 
                        {...otherProps} 
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionOverview);