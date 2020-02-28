import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 5px;
`;

export const Products = styled.View``;
export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity``;
