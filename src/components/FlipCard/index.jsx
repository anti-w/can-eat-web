import P from 'prop-types';
import React, { useState } from 'react';

import ReactFlipCard from 'react-card-flip';
import { BackFoodCard } from '../BackFoodCard';
import { FrontFoodCard } from '../FrontFoodCard';

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactFlipCard
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
      flipDirection="vertical"
      isFlipped={isFlipped}
    >
      <FrontFoodCard
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />

      <BackFoodCard
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
    </ReactFlipCard>
  );
};
