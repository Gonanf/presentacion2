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
import book from "../assets/book-svgrepo-com.svg";
import share from "../assets/share-circle-svgrepo-com.svg";
import pen from "../assets/pen-nib-svgrepo-com.svg";

export default  makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(<Txt ref={title}fontSize={150} opacity={0} fill={"white"} textWrap>Software de codigo abierto</Txt>)
  const arrows = createRefArray<Line>();
  
  yield* slideTransition(Direction.Left);
  yield* all(title().position([0,-250],1),title().opacity(1,1));

  view.add(<Txt ref={title} fill={"whitesmoke"} opacity={0} position={[0,-350]}>Alternativa al software propietario</Txt>)
  yield* title().opacity(1,1);

  view.add(<Txt ref={title} fill={"whitesmoke"} opacity={0} position={[0,0]}>Puede ser</Txt>)
  yield* title().opacity(1,1);
  view.add(<Line ref={arrows} lineWidth={5} end={0}  stroke={"white"} points={[[0,0],[0,100],[-500,100],[500,100]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} end={0} endArrow stroke={"white"} points={[[-500,100],[-500,200]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} end={0} endArrow stroke={"white"} points={[[0,100],[0,200]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} end={0} endArrow stroke={"white"} points={[[500,100],[500,200]]}></Line>)


  const svg = createRefArray<Img>();
  view.add(<Img ref={svg} src={book} opacity={0} width={100} height={100} position={[-500,350]}></Img>)
  view.add(<Img ref={svg} src={share} opacity={0} width={100} height={100} position={[0,350]}></Img>)
  view.add(<Img ref={svg} src={pen} opacity={0} width={100} height={100} position={[500,350]}></Img>)
  const texto = createRefArray<Txt>();
  view.add(<Txt ref={texto} fill={"white"} opacity={0} position={[-500,250]}>Estudiado</Txt>)
  view.add(<Txt ref={texto} fill={"white"} opacity={0} position={[0,250]}>Compartido</Txt>)
  view.add(<Txt ref={texto} fill={"white"} opacity={0} position={[500,250]}>Modificado</Txt>)
  
  yield* all(... arrows.map(ar => ar.end(1,1)));

  for (const [index,val] of texto.entries()){
    yield* val.opacity(1,1);
    yield* svg[index].opacity(1,1);
  }

  yield* beginSlide("Final2");
}

);
