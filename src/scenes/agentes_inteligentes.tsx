import { Circle, Camera, Line, Rect,Img ,makeScene2D, Path, Txt, Layout } from "@motion-canvas/2d";
import {
  all,
  beginSlide,
  createRef,
  createRefArray,
  waitUntil,
  Direction,
  slideTransition,
  useRandom,
} from "@motion-canvas/core";
import store from "../assets/store-svgrepo-com.svg";
import device from "../assets/device-mobile-svgrepo-com.svg";
import wave from "../assets/radio-wave-beacon-svgrepo-com.svg";

export default  makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(<Txt ref={title}fontSize={150} fill={"white"}>Agentes inteligentes</Txt>)
  
  yield* all(slideTransition(Direction.Left),title().position([0,-250],1));

  const arrows = createRefArray<Line>();
  view.add(<Line ref={arrows} lineWidth={5} end={0} endArrow stroke={"white"} points={[[0,-200],[-500,0]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} end={0} endArrow stroke={"white"} points={[[0,-200],[500,0]]}></Line>)


  const texto = createRefArray<Txt>();
  view.add(<Txt ref={texto} fill={"white"} opacity={0} position={[-500,50]}>Aprenden preferencias</Txt>)
  view.add(<Txt ref={texto} fill={"white"} opacity={0} position={[500,50]}>Brindan asistencia</Txt>)
  
  yield* arrows[0].end(1,1);
  yield* texto[0].opacity(1,1)
  yield* arrows[1].end(1,1);
  yield* texto[1].opacity(1,1)

  yield* beginSlide("Final2");
}

);
