import { Circle, Line, makeScene2D, Path, Txt, Layout } from "@motion-canvas/2d";
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

export default makeScene2D(function* (view) {
  // Create your animations here
  yield* slideTransition(Direction.Left);
  const WWW = createRef<Txt>();
  const WWW_bubble = createRef<Circle>()
  view.add(<Circle ref={WWW_bubble} fill={"white"} width={0} height={0}></Circle>)
  
  yield* all(WWW_bubble().width(300,1),WWW_bubble().height(300,1)); 
  WWW_bubble().add(<Txt ref={WWW} fill={"black"} opacity={0}>WWW</Txt>)
  yield* WWW().opacity(1,1); 

  yield* WWW_bubble().position([0,-200],1);
  const aplicacion = createRef<Txt>();
  view.add(<Txt ref={aplicacion} fill={"white"} opacity={0} position={[0,250]}>Aplicacion</Txt>)
  yield* aplicacion().opacity(1,1);
  const arrow_app = createRef<Line>();
  view.add(<Line ref={arrow_app} points={[[0,200],[0,0]]} end={0} endArrow stroke={"white"} lineWidth={5} ></Line>)
  yield* arrow_app().end(1,1); 

  yield* beginSlide("Integracion");

  yield* arrow_app().opacity(0,1);
  yield* all(aplicacion().position([0,-150],1), aplicacion().fill("black",1), WWW().position([0,-50],1),WWW_bubble().width(500,1),WWW_bubble().height(500,1));

  const benef = createRefArray<Line>();

  view.add(<Line ref={benef} points={[[0,50],[0,200]]} end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[-500,200],[500,200]]} end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[-500,200],[-500,300]]} endArrow end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[-167,200],[-167,300]]} endArrow end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[167,200],[167,300]]} endArrow end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[500,200],[500,300]]} endArrow end={0} stroke={"white"} lineWidth={5} ></Line>)
  
  for (const ar of benef){
    yield* ar.end(1,1);
  }
  yield* beginSlide("Aumento_De_Usuarios");
  
  const actual_benef = createRef<Txt>();
  view.add(<Txt fill={"white"} ref={actual_benef} opacity={0} textWrap position={[-500,400]} width={167}>Aumento de usuarios</Txt>);
  yield* actual_benef().opacity(1,1);

  yield* beginSlide("Disponibilidad");
  
  view.add(<Txt fill={"white"} ref={actual_benef} opacity={0} textWrap position={[-167,400]} width={167}>Disponibilidad 24h</Txt>);
  yield* actual_benef().opacity(1,1);

  yield* beginSlide("Utilidad");
  
  view.add(<Txt fill={"white"} ref={actual_benef} opacity={0} textWrap position={[167,400]} width={167}>Mejora la utilidad</Txt>);
  yield* actual_benef().opacity(1,1);

  yield* beginSlide("Expansion");
  
  view.add(<Txt fill={"white"} ref={actual_benef} opacity={0} textWrap position={[500,400]} width={167}>Posibilidad de expansion</Txt>);
  yield* actual_benef().opacity(1,1);


  yield* beginSlide("Final");
});
