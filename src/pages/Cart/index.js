import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import {formatPrice} from '../../util/format';

import {Container} from './styles';

function Cart() {
  return <Container />;
}

const mapStateToProps = state => ({
  products: state.cart.map(p => ({
    ...p,
    subtotal: formatPrice(p.price * p.amount),
    priceFormatted: formatPrice(p.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, prod) => total + prod.price * prod.amount, 0),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
