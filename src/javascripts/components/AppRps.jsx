import React,{useState} from 'react';
import ChoiceButton from './ChoiceButton.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import HistoryList from './HistoryList.jsx';

const answers = ['Камень', 'Ножницы', 'Бумага'];

function App () {

    const [score, setScore] = useState({player:0, computer:0})
    const [history, setHistory] = useState([]);

    function playRound (playerChoice) {
        //Сгенерировать ответ компа
        const botChoice = answers[Math.floor(Math.random() * answers.length)];

        //Сравнить и записать итог
        let classValue = '';

        //Ничья
        if (playerChoice == botChoice) {
            setScore({
                player: score.player + 1,
                computer: score.computer + 1
            });
            classValue = 'grey';
        }
        //Выиграл пользователь
        else if (
            (playerChoice == 'Камень' && botChoice == 'Ножницы') ||
            (playerChoice == 'Ножницы' && botChoice == 'Бумага') ||
            (playerChoice == 'Бумага' && botChoice == 'Камень')
        ) {
            score[0]++;
            setScore({
                ...score,
                player: score.player + 1,
            });
            classValue = 'green';
        }
        //Выиграл компьютер
        else {
            setScore({
                ...score,
                computer: score.computer + 1,
            });
            classValue = 'red';
        }

        //Записываем историю
        setHistory([
            ...history,
            {
                id: Date.now(),
                style: classValue,
                text: playerChoice + ' — ' + botChoice
            }
        ])
    }

    return (
        <div className="container">
            <div className="answers">
                {answers.map((answer, index) => (
                    <ChoiceButton 
                        key={index}
                        choice={answer}
                        onChoice={playRound}
                    />
                ))}
            </div>
            <div className="status">
                <ScoreBoard score={score} />
                <HistoryList history={history} />
            </div>
        </div>
    )
}

export default App;