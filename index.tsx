import React, { CSSProperties } from 'react';
import './index.css';

// Rocket SVG from Codepen
const rocketIcon = (
  <svg viewBox="0 0 512 512">
    <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
  </svg>
);

interface SparkleButtonProps {
  onClick?: () => void;
  normalColor?: string;
  hoverColor?: string;
  activeColor?: string;
  size?: number;
  icon?: React.ReactNode;
  iconOffsetX?: number;
  iconOffsetY?: number;
  iconColor?: string;
  sparkleColors?: string[];
  stopSparklesOnClick?: boolean;
}

const SparkleButton: React.FC<SparkleButtonProps> = ({
  onClick,
  normalColor = '#4a4a4a',
  hoverColor = '#6a6a6a',
  activeColor = '#3a3a3a',
  size = 60,
  icon = rocketIcon,
  iconOffsetX = 0,
  iconOffsetY = 0,
  iconColor = 'white',
  sparkleColors = [],
  stopSparklesOnClick = false,
}) => {
  const [sparklesStopped, setSparklesStopped] = React.useState(false);
  const scaleFactor = size / 60;
  const buttonStyles: CSSProperties = {
    backgroundColor: normalColor,
    width: size,
    height: size,
    fontSize: scaleFactor,
  };

  const iconStyles: CSSProperties = {
    transform: `translate(-50%, -50%) translate(${iconOffsetX}%, ${iconOffsetY}%)`,
    fill: iconColor,
  };

  const sparkleDefaultColors = [
    'blue',
    'yellow',
    'green',
    'fuchsia',
    'white',
    'pink',
    'PaleGreen',
    'SlateGray',
  ];
  const sparklePositions = [
    { top: '10%', left: '10%' },
    { top: '20%', left: '45%' },
    { top: '15%', right: '10%' },
    { top: '55%', left: '5%' },
    { top: '50%', left: '80%' },
    { bottom: '15%', left: '10%' },
    { bottom: '20%', right: '40%' },
    { bottom: '10%', right: '10%' },
  ].map(({ top, right, bottom, left }) => {
    const newTop = typeof top === 'number' ? top * scaleFactor : top;
    const newRight = typeof right === 'number' ? right * scaleFactor : right;
    const newBottom =
      typeof bottom === 'number' ? bottom * scaleFactor : bottom;
    const newLeft = typeof left === 'number' ? left * scaleFactor : left;

    return { top: newTop, right: newRight, bottom: newBottom, left: newLeft };
  });

  const sparkles = React.useMemo(
    () =>
      !sparklesStopped &&
      sparklePositions.map((position, index) => (
        <span
          key={index}
          className={`sparkle sparkle${index + 1}`}
          style={{
            fontSize:
              (index === 0 ? 2 : 1) * ((index % 4) + 1) * scaleFactor + 4,
            color: sparkleColors[index] || sparkleDefaultColors[index],
            ...position,
          }}
        >
          &#x2726;
        </span>
      )),
    [scaleFactor, sparklePositions, sparkleColors, sparklesStopped]
  );

  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.backgroundColor = hoverColor;
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.backgroundColor = normalColor;
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.backgroundColor = activeColor;
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.backgroundColor = hoverColor;
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (stopSparklesOnClick) {
      setSparklesStopped(true);
    }
  };

  return (
    <button
      className="circle-button"
      style={buttonStyles}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="icon" style={iconStyles}>
        {icon}
      </span>
      {sparkles}
    </button>
  );
};

export default SparkleButton;
