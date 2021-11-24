import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  padding: 20px;
`;

export const LogOutPane = styled(TouchableOpacity)`
  width: auto;
  height: 40px;
  float: right;
  align-self: flex-end;
`;

export const ColoredText = styled(Text)`
  font-size: 16px;
  text-align: right;
  font-weight: bold;
  color: #f57154;
  margin-top: 10px;
`;

export const AvatarScoreContainer = styled(View)`
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled(Image)`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const ScoreContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ScoreBox = styled(View)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const BodyTextContainer = styled(View)`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  text-align: left;
  margin-top: 30px;
`;

export const BodyTitleText = styled(Text)`
  font-size: 24px;
  color: #f57154;
  font-weight: 900;
`;

export const CustomFlatListContainer = styled(View)`
  margin-top: 10px;
  flex: 1;
`;

export const QuizColumn = styled(View)`
  display: flex;
  height: 100%;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const QuizBadge = styled(TouchableOpacity)`
  display: flex;
  height: 140px;
  width: 140px;
  margin: 20px;
  margin-top: ${props => props.move};
  border-radius: 40px;
  border: 1px solid #f57154;
  z-index: 999;
  flex-direction: column;
  text-align: center;
`;

export const QuizImage = styled(Image)`
  height: 90%;
  width: 90%;
  align-self: flex-end;
  position: relative;
  top: -20px;
`;

export const QuizText = styled(Text)`
  font-size: 18px;
  color: #f57154;
  font-weight: 800;
  align-self: center;
  position: relative;
  top: -15px;
`;
