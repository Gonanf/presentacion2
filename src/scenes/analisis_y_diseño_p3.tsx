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
  view.add(<Rect  zIndex={1} ref={box} lineWidth={5} radius={20} width={500} height={100} fill={"white"} position={[0,-400]}><Txt ref={analisis}>Analisis y Diseño</Txt></Rect>)


  view.add(<Rect  zIndex={1} opacity={0} ref={box} lineWidth={5} radius={20} width={500} height={100} fill={"white"} position={[0,450]}><Txt ref={analisis}>Usuarios Software</Txt></Rect>)
yield* box().opacity(1,1);
  
  var arrow = createRefArray<Line>();
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[0,-400],[0,-300],[-300,-300],[300,-300]]}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-300,-300],[-300,-200]]} endArrow></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[300,-300],[300,-200]]} endArrow></Line>)
  arrow.map(ar => ar.end(0))
  yield* all(... arrow.map(ar => ar.end(1,1)));

  var text = createRefArray<Txt>();
  view.add(<Txt ref={text} fill={"white"} position={[-300,-150]}>Analisis</Txt>)
  view.add(<Txt ref={text} fill={"white"} position={[300,-150]}>Comunicacion</Txt>)
  text.map(tx => tx.opacity(0))
  yield* all(... text.map(tx => tx.opacity(1,1)));


  arrow = createRefArray<Line>();
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-500,-50],[-300,-50],[-300,-100],[-300,-50],[300,-50],[300,-100],[300,-50],[500,-50]]} end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-500,-50],[-500,0]]} endArrow end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-300,-50],[-300,0]]} endArrow end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-100,-50],[-100,0]]} endArrow end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[500,-50],[500,0]]} endArrow end={0}></Line>)
  yield* all(... arrow.map(ar => ar.end(1,1)));
  
  text = createRefArray<Txt>();
  view.add(<Txt ref={text} fill={"white"} position={[-500,50]} opacity={0} fontSize={40}>Empresa</Txt>)
  view.add(<Txt ref={text} fill={"white"} position={[-300,50]} opacity={0} fontSize={40}>Problemas</Txt>)
  view.add(<Txt ref={text} fill={"white"} position={[-100,50]} opacity={0} fontSize={40}>Objetivo</Txt>)
  view.add(<Txt ref={text} fill={"white"} position={[500,50]} opacity={0}>Diseño del sistema</Txt>)
  yield* all(... text.map(tx => tx.opacity(1,1)));
  
  arrow = createRefArray<Line>();
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[500,50],[500,200],[300,200]]} endArrow end={0}></Line>)
  yield* all(... arrow.map(ar => ar.end(1,1)));
  text = createRefArray<Txt>();
  view.add(<Txt ref={text} fill={"white"} position={[100,200]} opacity={0} fontSize={40}>Nuevas tecnologias</Txt>)
  yield* all(... text.map(tx => tx.opacity(1,1)));


  arrow = createRefArray<Line>();
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-500,100],[-500,200],[-300,200]]} end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-300,100],[-300,200],[-300,200]]} end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-100,100],[-100,200],[-300,200]]} end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[-300,200],[-300,300],[0,300]]} endArrow end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[500,200],[500,300],[0,300]]} endArrow end={0}></Line>)
  view.add(<Line ref={arrow} lineWidth={5} stroke={"white"} points={[[0,300],[0,400]]} endArrow end={0}></Line>)
  yield* all(... arrow.map(ar => ar.end(1,1)));

  yield* beginSlide("Final");
});
