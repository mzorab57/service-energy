// components/AnimatedComponent.jsx
import React from 'react';

const AnimatedComponent = ({ children, animationType, dataAosDuration, dataAosDelay, anchorPlacement, offset, easing }) => {
  return (
    <div
      data-aos={animationType || 'fade-up'}
      data-aos-duration={dataAosDuration || undefined}
      data-aos-delay={dataAosDelay || undefined}
      data-aos-anchor-placement={anchorPlacement || undefined}
      data-aos-offset={offset || undefined}
      data-aos-easing={easing || undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;