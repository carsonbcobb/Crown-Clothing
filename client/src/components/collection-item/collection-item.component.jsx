import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles";
import {
  BackgroundImage,
  CollectionFooterContainer,
  PriceContainer,
} from "./collection-item.styles";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
