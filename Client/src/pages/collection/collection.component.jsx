import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer, Title, ItemsContainer, AddCollectionItem } from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map(item => (
          <AddCollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({                           //when it initialize is and renders it
  collection: selectCollection(ownProps.match.params.collectionId)(state) //expects there to be some collections
});                                                                       //in order for it to actually render any state 

export default connect(mapStateToProps)(CollectionPage);
