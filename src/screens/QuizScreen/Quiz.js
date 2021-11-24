import React from 'react';
import ResultModal from './ResultModal';
import CountDown from 'react-native-countdown-component';

import {
  BackgroundView,
  QuizCardBody,
  EmptyBar,
  FilledBar,
  QuestionText,
  QuestionTextContainer,
  OptionTextContainer,
  NextButton,
  NextButtonText,
  OptionText,
  QuestionCountContainer,
  QuestionCounterText,
} from './styledComponents';

let subTimer;
let mainTimer;

const Quiz = ({route, navigation}) => {
  const {quizData} = route.params;
  const [selectedAnswer, setSelectedAnswer] = React.useState(-1);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answersPicked, setAnswersPicked] = React.useState(new Array(10));
  const [finalScore, setFinalScore] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);

  const getResult = () => {
    clearInterval(subTimer);
    clearTimeout(mainTimer);
    setShowResults(true);
    setLoading(true);
    let score = 0;
    answersPicked.map((item, index) => {
      if (quizData[index]?.correct === item) return (score += 1);
    });
    setFinalScore(score);
    setLoading(false);
  };

  const renderNext = () => {
    return (
      <NextButton
        onPress={() => {
          nextQuestion();
        }}>
        <NextButtonText>
          {currentQuestion === 9 ? 'FINISH' : 'NEXT'}
        </NextButtonText>
      </NextButton>
    );
  };

  const renderCount = React.useCallback(() => {
    return (
      <QuestionCountContainer>
        <QuestionCounterText>{`Question`}</QuestionCounterText>
        <QuestionCounterText first>{currentQuestion + 1}</QuestionCounterText>
        <QuestionCounterText>{`/`}</QuestionCounterText>
        <QuestionCounterText>{`10`}</QuestionCounterText>
      </QuestionCountContainer>
    );
  }, [currentQuestion]);

  const nextQuestion = () => {
    let x = selectedAnswer;
    if (currentQuestion < 9) {
      const updateAnswers = answersPicked;
      updateAnswers[currentQuestion] = x;
      setSelectedAnswer(-1);
      setAnswersPicked(updateAnswers);
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
      resetInterval();
    } else {
      const updateAnswers = answersPicked;
      updateAnswers[currentQuestion] = x;
      setAnswersPicked(updateAnswers);
      getResult();
    }
  };

  React.useEffect(() => {
    currentQuestion < 9 ? null : finalInterval();
  }, [currentQuestion]);

  React.useEffect(() => {
    mainTimer = setTimeout(() => {
      clearInterval(subTimer);
      getResult();
    }, 100000);
    subTimer = setInterval(() => {
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
    }, 10000);
    return () => {
      clearTimeout(mainTimer);
      clearInterval(subTimer);
    };
  }, []);

  const finalInterval = () => {
    clearInterval(subTimer);
    subTimer = setInterval(() => {
      getResult();
    }, 10000);
  };

  const resetInterval = () => {
    clearInterval(subTimer);
    subTimer = setInterval(() => {
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
    }, 10000);
  };

  const renderAnswers = React.useCallback(() => {
    const {ans} = quizData[currentQuestion] || [];

    return (
      <>
        {ans?.map((item, index) => {
          return (
            <OptionTextContainer
              key={index?.toString() + item}
              onPress={() => {
                setSelectedAnswer(index);
              }}
              selected={selectedAnswer === index ? true : false}>
              <OptionText selected={selectedAnswer === index ? true : false}>
                {item || ''}
              </OptionText>
            </OptionTextContainer>
          );
        })}
      </>
    );
  }, [currentQuestion, selectedAnswer, setSelectedAnswer, quizData]);

  const renderQuestion = React.useCallback(() => {
    const {q} = quizData[currentQuestion] || '';

    return (
      <QuestionTextContainer>
        <QuestionText>{q || ''}</QuestionText>
      </QuestionTextContainer>
    );
  }, [currentQuestion]);

  return (
    <BackgroundView>
      {!showResults ? (
        <>
          {renderCount()}
          <EmptyBar>
            <FilledBar width={(currentQuestion + 1) * 10 + '%'} />
          </EmptyBar>
          <CountDown
            style={{marginBottom: 20}}
            until={100}
            digitStyle={{backgroundColor: '#f57154'}}
            onFinish={() => {}}
            onPress={() => {}}
            size={20}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'MM', s: 'SS'}}
          />
          <QuizCardBody>
            {renderQuestion()}
            {renderAnswers()}
            {selectedAnswer > -1 ? renderNext() : null}
          </QuizCardBody>
        </>
      ) : (
        <ResultModal
          loading={loading}
          score={finalScore}
          navigation={navigation}
        />
      )}
    </BackgroundView>
  );
};

export default Quiz;
