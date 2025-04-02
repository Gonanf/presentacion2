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
  const title = createRef<Txt>();
  view.add(
    <Txt
      ref={title}
      fontSize={150}
      opacity={1}
      fill={"white"}
      position={[0, -250]}
    >
      Software de codigo abierto
    </Txt>,
  );

  yield* slideTransition(Direction.Left);
  yield* title().text("Proyectos de codigo abierto", 1);

  const images = createRefArray<Img>();
  
  const cir = createRefArray<Circle>();
  const cir_txt = createRefArray<Txt>();
  view.add(<Circle ref={cir} opacity={0} fill={"white"} position={[-600,100]}><Txt ref={cir_txt}>Apache</Txt></Circle>)
  view.add(<Img ref={images} src={apache} width={100} height={100} position={[-600,100]}></Img>)
  yield* all(cir[0].width(300,1),cir[0].height(300,1),cir[0].opacity(1,1),cir[0].fill("blue",1), cir_txt[0].position([0,-100],1))
  view.add(<Circle ref={cir} opacity={0} fill={"white"} position={[0,100]}><Txt ref={cir_txt}>Firefox</Txt></Circle>)
  view.add(<Img ref={images} src={firefox} width={100} height={100} position={[0,100]}></Img>)
  yield* all(cir[1].width(300,1),cir[1].height(300,1),cir[1].opacity(1,1),cir[1].fill("orange",1),cir_txt[1].position([0,-100],1))
  view.add(<Circle ref={cir} opacity={0} fill={"white"} position={[600,100]}><Txt ref={cir_txt}>Linux</Txt></Circle>)
  view.add(<Img ref={images} src={linux} width={100} height={100} position={[600,100]}></Img>)
  yield* all(cir[2].width(300,1),cir[2].height(300,1),cir[2].opacity(1,1),cir[2].fill("green",1),cir_txt[2].position([0,-100],1))

  yield* beginSlide("categorias");
  
  yield* all(... cir.map(c => c.opacity(0,1)));
  yield* all(title().position([-500,0],1),title().text("Categorias",1));
  var arrows = createRefArray<Line>();

  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[-100,0],[0,0],[0,300],[0,-300]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,300],[100,300]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,150],[100,150]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,-150],[100,-150]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,-300],[100,-300]]}></Line>)
  arrows.map(ar => ar.end(0));

  var texts = createRefArray<Txt>();
  view.add(<Txt ref={texts} fill={"white"} position={[200,300]}>adhoc</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[300,150]}>estandarizado</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[250,-150]}>organizado</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[250,-300]}>comercial</Txt>)
  texts.map(tx => tx.opacity(0));
  
  yield* all(... arrows.map(ar => ar.end(1,1)));
  for (const val of texts){
    yield* val.opacity(1,1);
  }

  yield* beginSlide("dimensiones");

  yield* all(... arrows.map(ar => ar.end(0,1)),... texts.map(tx => tx.opacity(0,1)));
  yield* all(title().position([500,0],1),title().text("Dimensiones",1));

  arrows = createRefArray<Line>();
  texts = createRefArray<Txt>();


  view.add(<Line ref={arrows} lineWidth={5} stroke={"white"} points={[[50,0],[0,0],[0,300],[0,-300]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,300],[-100,300]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,200],[-100,200]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,100],[-100,100]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,-100],[-100,-100]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,-200],[-100,-200]]}></Line>)
  view.add(<Line ref={arrows} lineWidth={5} endArrow stroke={"white"} points={[[0,-300],[-100,-300]]}></Line>)
  arrows.map(ar => ar.end(0));


  view.add(<Txt ref={texts} fill={"white"} position={[-350,300]}>Estructura general</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[-250,200]}>Entorno</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[-250,100]}>Objetivos</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[-250,-100]}>Metodos</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[-400,-200]}>Comunidad de usuarios</Txt>)
  view.add(<Txt ref={texts} fill={"white"} position={[-250,-300]}>Licencias</Txt>)
  texts.map(ar => ar.opacity(0));
  yield* all(... arrows.map(ar => ar.end(1,1)));
  for (const val of texts){
    yield* val.opacity(1,1);
  }  
  yield* beginSlide("Final2");
});
