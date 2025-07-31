import MetaBalls from '../hooks/Balls';

const Balls = () => {
  return (
  
     
<MetaBalls
  color="green"
  cursorBallColor="#ffffff"
  cursorBallSize={5}
  ballCount={10}
  animationSize={40}
  enableMouseInteraction={true}
  enableTransparency={true}
  hoverSmoothness={0.05}
  clumpFactor={2}
  speed={0.3}
/>
 
  );
};

export default Balls;
