import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutStart } from "../../redux/user/user.actions";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	Title,
} from "./header.styles";
const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo />
		</LogoContainer>
		<Title>
			<h1>Crown Clothing Company</h1>
		</Title>

		<OptionsContainer>
			<OptionLink to="/shop">Shop</OptionLink>
			<OptionLink to="/contact">Contact</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={signOutStart}>
					Sign Out
				</OptionLink>
			) : (
				<OptionLink to="/signin">Sign In</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
