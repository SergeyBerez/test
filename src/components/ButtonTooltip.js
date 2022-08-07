import React, { useState } from 'react';
import exelIcon from '../../src/Vector.svg';
import layer from '../../src/Property 1=Default.png';
function ButtonTooltip() {
  const [isShown, setIsShown] = useState(false);
  const [cls, SetCls] = useState(true);
  const showTooltipBlock = () => {
    SetCls(!cls);
  };

  return (
    <>
      <button
        onClick={showTooltipBlock}
        className="button-exel"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <img src={exelIcon} alt="button" />
      </button>
      <div className={cls ? 'exel-animation' : 'exel-animation moveleft'}>
        <img src={layer} alt="users"></img>
      </div>
      {isShown && (
        <div className="tooltip-box">
          <p className="tooltip-box-text">
            Обучение для тех, кто готов учиться 10 часов в неделю, чтобы получить результат. Мы даем
            необходимые навыки на продвинутом уровне, убирая все лишнее
          </p>
        </div>
      )}
    </>
  );
}

export default ButtonTooltip;
