import styled from 'styled-components/native';
import {darken} from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  flex: 1;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 200px;
  max-height: 350px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
  margin-top: auto;
`;
