import React from 'react';
import {View, Text} from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

class Main extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');
    this.setState({products: response.data});
    console.log(this.state.products);
  };

  render() {
    const {products} = this.state;
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Main;
