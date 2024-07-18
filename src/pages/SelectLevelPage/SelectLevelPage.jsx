import { Link, useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { EasyModeContextAndSp } from "../../utils/contextMode";
import { useContext, useState } from "react";
import { Button } from "../../components/Button/Button";

export function SelectLevelPage() {
  const { toggleMode, level, setLevel } = useContext(EasyModeContextAndSp);
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState(level);

  const handleRadioChange = value => {
    setSelectedDifficulty(value);
    setLevel(value);
  };
  const handlePlay = () => {
    navigate(`/game/${selectedDifficulty}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.checkbox}>
          <label className={styles.labelCheck}>
            <input onChange={toggleMode} className={styles.input} type="checkbox" name="checkbox" />
            <span className={styles.checkboxCustom}></span>
          </label>
          <h1 className={styles.text}>Легкий режим(3 жизни)</h1>
        </div>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <label
              className={`${styles.levelLink} ${selectedDifficulty === 3 ? styles.active : ""}`}
              to={`/game/${level}`}
            >
              <input
                type="radio"
                name="difficulty"
                value={3}
                onChange={() => handleRadioChange(3)}
                className={styles.lableInput}
              />
              1
            </label>
          </li>
          <li className={styles.level}>
            <label
              className={`${styles.levelLink} ${selectedDifficulty === 6 ? styles.active : ""}`}
              to={`/game/${level}`}
            >
              <input
                type="radio"
                name="difficulty"
                value={6}
                onChange={() => handleRadioChange(6)}
                className={styles.lableInput}
              />
              2
            </label>
          </li>
          <li className={styles.level}>
            <label
              className={`${styles.levelLink} ${selectedDifficulty === 9 ? styles.active : ""}`}
              to={`/game/${level}`}
            >
              <input
                type="radio"
                name="difficulty"
                value={9}
                onChange={() => handleRadioChange(9)}
                className={styles.lableInput}
              />
              3
            </label>
          </li>
        </ul>
        <Button onClick={handlePlay}>Играть</Button>
        <Link to="/leaderboard">
          <p className={styles.text}>
            <u>Перейти к лидерборду</u>
          </p>
        </Link>
      </div>
    </div>
  );
}
