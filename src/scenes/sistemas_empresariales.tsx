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
  
  const sistemas = <Txt opacity={0} fill={"white"} fontSize={150}>Sistemas empresariales</Txt>
  view.add(sistemas);
  yield* all(sistemas.opacity(1,1),sistemas.position([0,-400],1));
  const ar = <Line points={[[0,-325],[0,0]]} end={0} endArrow stroke={"white"} lineWidth={5} />;
  view.add(ar);
  yield* ar.end(1,1);
  const SOA = createRef<Txt>();
  view.add(<Txt ref={SOA} opacity={0} fill={"white"} position={[0,50]}>SOA</Txt>);
  yield* SOA().opacity(1,1);
  yield* beginSlide("Introduccion");
yield* all(SOA().opacity(0,1),sistemas.opacity(0,1),ar.opacity(0,1));
  const levels = createRefArray<Path>();
  const piramid = createRef<Camera>();
  view.add(<Camera ref={piramid}>
    <Path
      ref={levels}
      lineWidth={4}
      stroke={"black"}
      fill={"white"}
      data="M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z"
      position={[-100, -100]}
      scale={0.25}
      opacity={0}
    >
    </Path>

<Path
      ref={levels}
      lineWidth={4}
      stroke={"black"}
      opacity={0}
      fill={"white"}
      data="M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z"
      position={[-100, 50]}
      scale={0.25}
    >
    </Path>

    <Path
      ref={levels}
      lineWidth={4}
      stroke={"black"}
      opacity={0}
      fill={"white"}
      data="M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z"
      position={[-100, 200]}
      scale={0.25}
    >
    </Path>

    <Path
      ref={levels}
      lineWidth={4}
      opacity={0}
      stroke={"black"}
      fill={"white"}
      data="M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z"
      position={[-100, 350]}
      scale={0.25}
    >
    </Path>
  </Camera>);

  for (const lev of levels) {
    yield* lev.opacity(1, 0.3);
  }

  yield* levels[0].data(
    "M301.113,12.011L576.715,584.766L25.508,584.766L301.113,12.011z",
    0.3,
  );
  yield* all(
    levels[1].data(
      "M25.508,12.011 L776.715,12.011 L776.715,584.766 L25.508,584.766 L25.508,12.011 z",
      0.3,
    ),
    levels[1].position([-125, 50], 1),
  );
  yield* all(
    levels[2].data(
      "M25.508,12.011 L976.715,12.011 L976.715,584.766 L25.508,584.766 L25.508,12.011 z",
      0.3,
    ),
    levels[2].position([-150, 200], 1),
  );
  yield* all(
    levels[3].data(
      "M25.508,12.011 L1176.715,12.011 L1176.715,584.766 L25.508,584.766 L25.508,12.011 z",
      0.3 ,
    ),
    levels[3].position([-175, 350], 1),
  );

  


  yield* levels[1].fill("gray",1)
  yield* piramid().zoom(2,1);  

  yield* all(levels[1].data(
    "M25.508,12.011 L1576.715,12.011 L1576.715,584.766 L25.508,584.766 L25.508,12.011 z",
    0.3,
  ), levels[1].position([-225, 50], 0.5))

  view.add(<Txt ref={SOA} opacity={0} position={[-50,250]} fill={"white"}>Capa superior</Txt>)
  yield* all(SOA().opacity(1,1),SOA().fontSize(100,1));
  yield* beginSlide("ERP");
  piramid().remove();
  SOA().remove();
  const erp_rec = createRef<Rect>();
  view.add(<Rect ref={erp_rec} fill={"white"} width={200} height={100}><Txt ref={SOA} fill={"black"}>ERP</Txt></Rect>)
  yield* erp_rec().position([0,-400],1);
  const benef = createRefArray<Line>();

  view.add(<Line ref={benef} points={[[0,-400],[0,-200]]} end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[-500,-200],[500,-200]]} end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[-500,-200],[-500,-100]]} endArrow end={0} stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={benef} points={[[500,-200],[500,-100]]} endArrow end={0} stroke={"white"} lineWidth={5} ></Line>)

  for (const ar of benef){
    yield* ar.end(1,1);
  } 

  view.add(<Rect ref={SOA} fill={"white"} opacity={0} width={200} height={100} position={[-500,0]}><Txt ref={SOA} fill={"black"}>SAP</Txt></Rect>)
  yield* SOA().opacity(1,1);
  view.add(<Rect ref={SOA} fill={"white"} opacity={0} width={200} height={100} position={[500,0]}><Txt ref={SOA} fill={"black"}>Oracle</Txt></Rect>)
  yield* SOA().opacity(1,1);
  
  const con_ar = createRefArray<Line>();
  view.add(<Line ref={con_ar} points={[[-500,0],[-500,100],[-150,100]]} end={0} endArrow stroke={"white"} lineWidth={5} ></Line>)
  view.add(<Line ref={con_ar} points={[[500,0],[500,100],[150,100]]} end={0} endArrow stroke={"white"} lineWidth={5} ></Line>)

  yield* all(... con_ar.map(arrow => arrow.end(1,1)));

  view.add(<Rect ref={SOA} fill={"white"} opacity={0} width={300} height={100} position={[0,100]}><Txt ref={SOA} fill={"black"}>Capacitacion</Txt></Rect>)
  yield* SOA().opacity(1,1);
  
  yield* beginSlide("Final");

});
