import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  BackgroundImage,
  Button,
  CollectionFooter,
  NameFooter,
  PriceFooter
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooter>
        <NameFooter>{name}</NameFooter>
        <PriceFooter>{price}</PriceFooter>
      </CollectionFooter>
      <Button onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
