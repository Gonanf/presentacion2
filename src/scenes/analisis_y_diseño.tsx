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
  view.add(<Rect ref={box} lineWidth={5} radius={20} width={100} height={100} fill={"white"}><Txt ref={analisis}></Txt></Rect>)
  yield* all(box().width(500,1),analisis().text("Analisis y Diseño",1),box().position([0,-400],1));

  var arrows = createRefArray<Line>();
  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[0,-400],[0,-200],[-300,-200],[300,-200]]} end={0}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[300,-200],[300,-100]]} end={0}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[-300,-200],[-300,-100]]} end={0}></Line>)
  
  yield* all(... arrows.map(ar => ar.end(1,1)));
  var iden_resol = createRefArray<Txt>();
  view.add(<Txt ref={iden_resol} fill={"white"} opacity={0} position={[-300,-50]}>Identificar</Txt>)
  view.add(<Txt ref={iden_resol} fill={"white"} opacity={0} position={[300,-50]}>Resolver</Txt>)
  for (const tx of iden_resol){
    yield* tx.opacity(1,1);
  }

  arrows = createRefArray<Line>();
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[300,0],[300,50],[150,50]]} end={0}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[-300,0],[-300,50],[-150,50]]} end={0}></Line>)
  yield* all(... arrows.map(ar => ar.end(1,1)));

  analisis = createRef<Txt>();
  view.add(<Txt ref={analisis} position={[0,80]} textWrap width={200} textAlign={"center"} fill={"white"} opacity={0}>Problemas con</Txt>)
  yield* analisis().opacity(1,1);

  yield* beginSlide("Metodos");
  arrows = createRefArray<Line>();
  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[0,150],[0,200],[-500,200],[500,200]]} ></Line>)
  view.add(<Line ref={arrows} endArrow lineWidth={5} stroke={"white"} points={[[-500,200],[-500,300]]} ></Line>)
  view.add(<Line ref={arrows} endArrow lineWidth={5} stroke={"white"} points={[[0,200],[0,300]]} ></Line>)
  view.add(<Line ref={arrows} endArrow lineWidth={5} stroke={"white"} points={[[500,200],[500,300]]} ></Line>)
  arrows.map(ar => ar.end(0));

  yield* all(... arrows.map(ar => ar.end(1,1)));

  const texts = createRefArray<Txt>();
  view.add(<Txt ref={texts} width={400} opacity={0} textAlign={"center"} fill={"white"} position={[-500,350]} textWrap>Analisis de flujo de datos</Txt>)
  view.add(<Txt ref={texts} width={400} opacity={0} textAlign={"center"} fill={"white"} position={[0,350]} textWrap>Transformacion de datos</Txt>)
  view.add(<Txt ref={texts} width={400} opacity={0} textAlign={"center"} fill={"white"} position={[500,380]} textWrap>Almacenaje y produccion de informacion</Txt>)
  
  for (const tx of texts){
    yield* tx.opacity(1,1);
  }
  yield* beginSlide("Final");
});
