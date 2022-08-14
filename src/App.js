import "./App.css";
import Dots from "./components/Dots";
import ButtonTooltip from "./components/ButtonTooltip";

function App() {
  return (
    <>
      <header className="header">
        <div className="container mx-auto">
          <div className="header-bg">
            <div className="header-title-block">
              <div className="header-subtitle-block">
                <h1 className="h1-title">
                  <p>Профессия</p> Frontend — разработчик
                </h1>
                <Dots></Dots>
              </div>

              <p className="header-subtitle">
                Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
                знанием технологий больше, чем у других кандидатов
              </p>
              <p className="header-subtitle-description">
                Начиная с основ изучишь JavaScript, разберешься с самыми
                популярными технологиями, научишься писать Frontend на
                фреймворке и связывать его с Backend. Навыки после курса
                оцениваются от 100 т.р.
              </p>
              <ButtonTooltip></ButtonTooltip>
            </div>
            <div className="section-button-circles">
              <div className="circles-block">
                <div className="circles">
                  <button className="button-header">
                    задать вопрос об обучении
                  </button>
                </div>
                <div className="circles"></div>
                <div className="circles"></div>
              </div>
            </div>
            <Dots cls="down"></Dots>
          </div>

          {/* <Dots cls="up"></Dots> */}

          <div className="section-numbers">
            <div className="number-block">
              <div className="number">293</div>
              <p className="number-text">
                <p>HD видеоурока</p> длительностью 3 - 15 минут
              </p>
            </div>
            <div className="number-block">
              <div className="number">6</div>
              <p className="number-text">
                {" "}
                Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)
              </p>
            </div>
            <div className="number-block">
              <span className="number">193</span>
              <p className="number-text">заданий и тестов для закрепления</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container mx-auto">
          <div className="section-description">
            <h2 className="description-title">
              Как именно ты станешь разработчиком
            </h2>
            <p className="description-subtitle">
              На курсе ты не просто изучаешь теоретический материал. в процессе
              изучения ты повторяете за действующим разработчиком, после чего{" "}
              <b>закрепляешь знания на заданиях и проектах.</b>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
