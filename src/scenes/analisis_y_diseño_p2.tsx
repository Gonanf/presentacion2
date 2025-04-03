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

  const box = createRef<Rect>();
  var analisis = createRef<Txt>();
  view.add(<Rect  zIndex={1} ref={box} lineWidth={5} radius={20} width={500} height={100} fill={"white"} position={[0,-300]}><Txt ref={analisis}>Analisis y Diseño</Txt></Rect>)
  

  const circle = createRef<Circle>();
  view.add(<Circle ref={circle} fill={"cyan"}></Circle>)
  yield* all(circle().width(1000,1),circle().height(1000,1))

  const circles =createRefArray<Circle>();
  const text = createRefArray<Txt>();
  view.add(<Circle ref={circles} fill={"purple"} position={[-300,0]}><Txt ref={text} textWrap fontSize={0} width={200} textAlign={"center"}>Mejoras en el apoyo de los usuarios</Txt></Circle>)
  view.add(<Circle ref={circles} fill={"lime"}  position={[300,0]}><Txt ref={text} textWrap fontSize={0} width={200} textAlign={"center"}>Asistencia a los usuarios actuales y futuros</Txt></Circle>)
  yield* all(... circles.map(cr => all(cr.width(300,1),cr.height(300,1))),... text.map(tx => tx.fontSize(40,1)))

  yield* beginSlide("Final");
});
