import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Restaurant = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  z-index: 1;
`;

export const RestaurantCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  z-index: 1;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Rating = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
