import "./App.css";
import Dots from "./components/Dots";
import ButtonTooltip from "./components/ButtonTooltip";

function App() {
  return (
    <>
      <header className="header">
        <div className="header-bg">
          <div className="circles-block">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>
          <div className="header-title-block">
            <h1 className="h1-title">
              <p>Профессия</p> Frontend — разработчик
            </h1>
            <p className="header-subtitle">
              Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
              знанием технологий больше, чем у других кандидатов
            </p>
            <p className="header-subtitle-description">
              Начиная с основ изучишь JavaScript, разберешься с самыми
              популярными технологиями, научишься писать Frontend на фреймворке
              и связывать его с Backend. Навыки после курса оцениваются от 100
              т.р.
            </p>
            <button className="button-header">задать вопрос об обучении</button>
          </div>

       
        </div>
        <ButtonTooltip></ButtonTooltip>
        <Dots cls="up"></Dots>
        <Dots cls="down"></Dots>
      </header>

      <div className="container mx-auto"></div>
    </>
  );
}
export default App;
