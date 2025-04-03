import {
  Camera,
  Circle,
  Img,
  Layout,
  Line,
  makeScene2D,
  Path,
  Rect,
  Txt,
} from "@motion-canvas/2d";
import {
  all,
  beginSlide,
  createRef,
  createRefArray,
  Direction,
  slideTransition,
  useRandom,
  waitUntil,
} from "@motion-canvas/core";
import apache from "../assets/apache-svgrepo-com.svg";
import firefox from "../assets/firefox-svgrepo-com.svg";
import linux from "../assets/linux-svgrepo-com.svg";

export default makeScene2D(function* (view) {
  yield* slideTransition(Direction.Left);

  const circle = createRef<Circle>();
  view.add(<Circle ref={circle} fill={"white"} opacity={0}><Txt>Ventajas</Txt></Circle>)
  
  yield* all(circle().width(800,1),circle().height(800,1),circle().opacity(1,1),circle().fill("#ac00af",1));

  const texts = createRefArray<Txt>();
  circle().add(<Txt ref={texts} position={[0,-125]} lineWidth={1} stroke={"whitesmoke"} textWrap>Util en el desarrollo multiplataforma</Txt>)
  circle().add(<Txt ref={texts} position={[0,200]}textAlign={"center"} width={500} lineWidth={1} stroke={"whitesmoke"} textWrap>Acelera el proceso de estandarizacion de comunicaciones entre dispositivos</Txt>)
  texts.map(ar => ar.opacity(0));
  for (const tx of texts){
    yield* tx.opacity(1,1);
  }



  yield* beginSlide("Final");
});
