import React from 'react';
import ShopData from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map(({ id, ...otherProps }) => (
                        <CollectionPreview
                            key={id} 
                            {...otherProps} 
                        />
                    ))
                }
            </div>
        )
    }
} 
export default ShopPage;