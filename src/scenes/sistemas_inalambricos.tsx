import { Circle, Camera, Line, Rect, makeScene2D, Path, Txt, Layout } from "@motion-canvas/2d";
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

export default  makeScene2D(function* (view) {
  
  yield* slideTransition(Direction.Left);

  const title = createRef<Txt>();
  view.add(<Txt ref={title} fill={"white"} fontSize={100} textWrap textAlign={"center"} position={[0,-300]} opacity={0}>Sistemas para dispositivos inalambricos y moviles</Txt>)
  yield* title().opacity(1,1); 


  yield* beginSlide("Intranet");
  yield* title().opacity(0,1); 

  const cir = createRefArray<Circle>();
  const cir_txt = createRefArray<Txt>();
  view.add(<Circle ref={cir} opacity={0} fill={"white"} ><Txt ref={cir_txt}>Intranet</Txt></Circle>)
  yield* all(cir[0].width(300,1),cir[0].height(300,1),cir[0].opacity(0.5,1),cir[0].fill("cyan",1))
  view.add(<Circle ref={cir} opacity={0} fill={"white"}><Txt ref={cir_txt}>Extranet</Txt></Circle>)
  yield* all(cir[1].width(300,1),cir[1].height(300,1),cir[1].opacity(0.5,1),cir[1].fill("purple",1))
  yield* all(cir[0].position([-100,0],1),cir[1].position([100,0],1));
  yield* beginSlide("Redes")
  const arrow_initial = createRef<Line>();
  const arrows = createRefArray<Line>();
  view.add(<Line ref={arrow_initial} lineWidth={5} stroke={"white"} points={[[0,0],[0,-200]]} endArrow end={0}></Line>);
  yield* arrow_initial().end(1,1);
  const txt_initial = createRef<Txt>();
  view.add(<Txt ref={txt_initial} fill={"white"} opacity={0} position={[0,-250]}>Redes de comunicaciones</Txt>);
  yield* txt_initial().opacity(1,1);
  
  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[0,0],[0,200],[-500,200],[500,200]]} end={0}></Line>);
  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[-500,200],[-500,300]]} endArrow end={0}></Line>);
  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[-167,200],[-167,300]]} endArrow end={0}></Line>);
  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[167,200],[167,300]]} endArrow end={0}></Line>);
  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[500,200],[500,300]] } endArrow end={0}></Line>);

  const txt_ar = createRefArray<Txt>();

  view.add(<Txt ref={txt_ar} fill={"white"} opacity={0} position={[-500,350]}>Voz</Txt>);
  view.add(<Txt ref={txt_ar} fill={"white"} opacity={0} position={[-167,350]}>Video</Txt>);
  view.add(<Txt ref={txt_ar} fill={"white"} opacity={0} position={[167,350]}>Mensajeria</Txt>);
  view.add(<Txt ref={txt_ar} fill={"white"} opacity={0} position={[500,350]}>Correo</Txt>);
  

  yield* all(... arrows.map(arrow => arrow.end(1,1)));
  yield* all(... txt_ar.map(txt => txt.opacity(1,1)));

  yield* beginSlide("Final1");
}

);
