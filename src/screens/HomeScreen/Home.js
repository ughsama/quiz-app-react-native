import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Quizzes} from '../../assets/AllQuizzes';
import {AuthContext} from '../../navigation/Route';
import AvatarImage from '../../assets/Placeholders/avatar_image.jpeg';
import {
  Avatar,
  AvatarScoreContainer,
  Container,
  LogOutPane,
  ColoredText,
  ScoreBox,
  ScoreContainer,
  BodyTextContainer,
  BodyTitleText,
  CustomFlatList,
  QuizBadge,
  CustomFlatListContainer,
  QuizImage,
  QuizText,
} from './styledComponents';

const Home = ({navigation}) => {
  const {signOut, returnUser} = React.useContext(AuthContext);
  const user = returnUser();

  const returnList = React.useCallback(() => {
    return (
      <CustomFlatListContainer>
        <FlatList
          data={Quizzes}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <QuizBadge
                key={item?.id}
                move={index % 2 === 0 ? '20px' : '0px'}
                onPress={() => {
                  navigation.navigate('Quiz', {quizData: item?.data});
                }}>
                <QuizImage source={item?.image} />
                <QuizText>{item?.category}</QuizText>
              </QuizBadge>
            );
          }}
        />
      </CustomFlatListContainer>
    );
  }, [Quizzes]);

  return (
    <Container>
      <LogOutPane
        onPress={() => {
          signOut();
        }}>
        <ColoredText>Logout</ColoredText>
      </LogOutPane>
      <AvatarScoreContainer>
        <Avatar source={AvatarImage}></Avatar>
        <ScoreContainer>
          <ScoreBox>
            <Text>Quizzes Taken</Text>
            <ColoredText>{user?.quizzesTaken}</ColoredText>
          </ScoreBox>
          <ScoreBox>
            <Text>Total Score</Text>
            <ColoredText>{user?.totalScore}</ColoredText>
          </ScoreBox>
          <ScoreBox>
            <Text>Correct Answers</Text>
            <ColoredText>{user?.rightAnswers}</ColoredText>
          </ScoreBox>
        </ScoreContainer>
      </AvatarScoreContainer>
      <BodyTextContainer>
        <BodyTitleText>Ready For</BodyTitleText>
        <BodyTitleText>Another Quiz?</BodyTitleText>
      </BodyTextContainer>
      {returnList()}
    </Container>
  );
};

export default Home;
