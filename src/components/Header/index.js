import React, {Component} from 'react';
import {Wrapper, Container, Logo, BasketContainer, ItemCount} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Header extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <Wrapper>
        <Container>
          <Logo />
          <BasketContainer onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-basket" color="#fff" size={25} />
            <ItemCount>{0}</ItemCount>
          </BasketContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
