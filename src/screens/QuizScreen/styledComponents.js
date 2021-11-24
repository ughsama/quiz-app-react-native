import styled from 'styled-components';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export const BackgroundView = styled(View)`
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyBar = styled(View)`
  background-color: #fffff3;
  width: 85%;
  height: 10px;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const FilledBar = styled(View)`
  background-color: #f57154;
  width: ${props => props.width};
  height: 10px;
  border-radius: 10px;
`;

export const QuizCardBody = styled(View)`
  background-color: #fffff3;
  height: 65%;
  width: 85%;
  border-radius: 25px;
  box-shadow: 5px 10px red;
`;

export const QuestionTextContainer = styled(View)`
  display: flex;
  height: 20%;
  width: 100%;
  margin-top: 20px;
`;

export const QuestionText = styled(Text)`
  font-style: normal;
  font-size: 22px;
  font-weight: 600;
  color: #f57154;
  margin-top: 10px;
  margin-left: 20px;
`;

export const OptionTextContainer = styled(TouchableOpacity)`
  display: flex;
  align-self: center;
  height: 10%;
  text-align: left;
  width: 90%;
  margin-top: 5%;
  border: 1px solid #f57154;
  border-radius: 5px;
  background-color: ${props => (props.selected ? '#F57154' : '#fffff3')};
`;

export const NextButton = styled(TouchableOpacity)`
  display: flex;
  background-color: #f57154;
  width: 40%;
  height: 15%;
  margin-left: auto;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 25px;
  border-top-left-radius: 25px;
  text-align: center;
`;

export const NextButtonText = styled(Text)`
  font-style: normal;
  font-size: 25px;
  font-weight: 700;
  color: #fffff3;
`;

export const QuestionCounterText = styled(Text)`
  font-style: normal;
  height: auto;
  font-size: 15px;
  font-weight: ${props => (props.first ? 'bold' : 'normal')};
  color: #f57154;
  margin: 2px;
`;

export const QuestionCountContainer = styled(View)`
  display: flex;
  flex-direction: row;
  height: auto;
  width: auto;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-left: 30px;
`;

export const OptionText = styled(Text)`
  font-style: normal;
  font-size: 17px;
  font-weight: 600;
  color: ${props => (props.selected ? '#FFFFF3' : '#f57154')};
  margin-top: 10px;
  margin-left: 20px;
`;

export const ResultHeader = styled(View)`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ResultTitle = styled(Text)`
  font-style: normal;
  font-size: 24px;
  font-weight: 900;
  color: #f57154;
  margin-top: 10px;
  margin-left: 20px;
`;

export const ResultText = styled(Text)`
  font-style: normal;
  font-size: 22px;
  font-weight: 900;
  color: ${props => (props.score > 5 ? 'green' : 'red')};
  margin-top: 10px;
  margin-left: 20px;
`;

export const UpperBanner = styled(Image)`
  height: 20%;
  z-index: 999;
  width: 100%;
  margin-bottom: auto;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const BottomBanner = styled(Image)`
  height: 20%;
  z-index: 999;
  width: 100%;
  margin-top: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const AvatarBadgeContainer = styled(View)`
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled(Image)`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const Badge = styled(Image)`
  height: 40px;
  width: 40px;
  position: relative;
  top: -40px;
  left: 40px;
`;

export const ScoreContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ScoreLabel = styled(Text)`
  font-style: normal;
  font-size: 20px;
  font-weight: 700;
  color: #f57154;
`;

export const ScoreValue = styled(Text)`
  font-style: normal;
  font-size: 20px;
  font-weight: 200;
`;
