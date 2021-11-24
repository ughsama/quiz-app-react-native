import React from 'react';
import {ActivityIndicator} from 'react-native';
import BG from '../../assets/background.jpeg';
import AvatarImage from '../../assets/Placeholders/avatar_image.jpeg';
import WIN from '../../assets/Icons/win.png';
import LOSE from '../../assets/Icons/lose.png';
import ButtonwithLoader from '../../components/ButtonWithLoader';
import {AuthContext} from '../../navigation/Route';

import {
  BackgroundView,
  ResultText,
  ResultTitle,
  ResultHeader,
  UpperBanner,
  BottomBanner,
  AvatarBadgeContainer,
  Avatar,
  Badge,
  ScoreContainer,
  ScoreLabel,
  ScoreValue,
} from './styledComponents';

const ResultModal = ({navigation, loading = true, score = 0}) => {
  const {updateScore, returnUser} = React.useContext(AuthContext);
  const user = returnUser();

  const returnToHome = () => {
    const newScore = score * 10;
    updateScore({
      quizzesTaken: user?.quizzesTaken + 1,
      totalScore: user?.totalScore + newScore,
      rightAnswers: user?.rightAnswers + score,
    });
    navigation.pop();
  };
  return (
    <BackgroundView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <UpperBanner source={BG} />
          <ResultHeader>
            <ResultTitle>RESULTS</ResultTitle>
          </ResultHeader>
          <AvatarBadgeContainer>
            <Avatar source={AvatarImage} />
            <Badge source={score > 5 ? WIN : LOSE} />
          </AvatarBadgeContainer>
          <ScoreContainer>
            <ScoreLabel>{`Correct Answers: `}</ScoreLabel>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
          <ScoreContainer>
            <ScoreLabel>{`Wrong Answers: `}</ScoreLabel>
            <ScoreValue>{10 - score}</ScoreValue>
          </ScoreContainer>
          <ScoreContainer>
            <ScoreLabel>{`Total Score: `}</ScoreLabel>
            <ScoreValue>{score * 10}</ScoreValue>
          </ScoreContainer>

          <ButtonwithLoader
            text="Try another quiz?"
            loading={false}
            onPress={returnToHome}
          />
          <BottomBanner source={BG} />
        </>
      )}
    </BackgroundView>
  );
};

export default ResultModal;
