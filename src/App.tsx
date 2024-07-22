import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import { useCallback } from "react";

extend({
  Container,
  Graphics
});

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const drawCallback = useCallback((graphics: any) => {
    graphics.clear();
    graphics.setFillStyle({ color: "red" });
    graphics.rect(0, 0, 100, 100);
    graphics.fill();
  }, []);

  return (
    <Application>
      <container x={100} y={100}>
        <graphics draw={drawCallback} />
      </container>
    </Application>
  );
};

export default App;
