import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import HeightWeightPage from './HeightWeightPage';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [userData, setUserData] = useState({
    height: '',
    weight: '',
    answers: []
  });

  const questions = [
    "과일을 적게 섭취합니까?",
    "채소를 적게 섭취합니까?",
    "짠 음식을 많이 먹습니까?",
    "술을 많이 마십니까?",
    "기름진 음식, 구운 음식, 가공육, 유지방 등을 많이 섭취합니까?",
    "미세먼지가 많은 환경에서 생활합니까?",
    "담배를 핍니까?",
    "발암물질을 다루는 직업에 종사합니까?",
    "칼슘을 적게 섭취하거나 운동을 잘 하지 않습니까?",
    "고혈압입니까?",

    // Add more questions here
  ];

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const updateUserData = (data) => {
    setUserData({ ...userData, ...data });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <WelcomePage onStart={nextPage} />;
      case 1:
        return <HeightWeightPage onNext={nextPage} updateUserData={updateUserData} />;
      case questions.length + 2:
        return <ResultsPage userData={userData} />;
      default:
        return (
          <QuestionPage
            question={questions[currentPage - 2]}
            onAnswer={(answer) => {
              updateUserData({ answers: [...userData.answers, answer] });
              nextPage();
            }}
          />
        );
    }
  };

  return <><title>건강 상태 체크 앱</title><div className="App">{renderPage()}</div></>;
}

export default App;