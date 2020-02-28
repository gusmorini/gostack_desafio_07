import React from 'react';
import {FlatList} from 'react-native';
import api from '../../services/api';
import {formatPrice} from '../../util/format';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

class Main extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');
    // add priceFormatted in products
    const data = response.data.map(p => ({
      ...p,
      priceFormatted: formatPrice(p.price),
    }));
    this.setState({products: data});
  };

  renderProduct = ({item}) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>{0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Adicionar</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default Main;
