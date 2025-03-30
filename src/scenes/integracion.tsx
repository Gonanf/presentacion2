import { Circle, Line, makeScene2D, Path, Txt, Layout } from "@motion-canvas/2d";
import {
  all,
  beginSlide,
  createRef,
  createRefArray,
  waitUntil,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // Create your animations here

  const levels = createRefArray<Path>();
  const piramid = createRef<Layout>();
  view.add(<Layout ref={piramid}></Layout>);
  piramid().add(
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
    </Path>,
  );

  piramid().add(
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
    </Path>,
  );

  piramid().add(
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
    </Path>,
  );

  piramid().add(
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
    </Path>,
  );

  yield* beginSlide("Introduccion");
  for (const lev of levels) {
    yield* lev.opacity(1, 1);
  }

  yield* levels[0].data(
    "M301.113,12.011L576.715,584.766L25.508,584.766L301.113,12.011z",
    1,
  );
  yield* all(
    levels[1].data(
      "M25.508,12.011 L776.715,12.011 L776.715,584.766 L25.508,584.766 L25.508,12.011 z",
      1,
    ),
    levels[1].position([-125, 50], 1),
  );
  yield* all(
    levels[2].data(
      "M25.508,12.011 L976.715,12.011 L976.715,584.766 L25.508,584.766 L25.508,12.011 z",
      1,
    ),
    levels[2].position([-150, 200], 1),
  );
  yield* all(
    levels[3].data(
      "M25.508,12.011 L1176.715,12.011 L1176.715,584.766 L25.508,584.766 L25.508,12.011 z",
      1,
    ),
    levels[3].position([-175, 350], 1),
  );
  yield* beginSlide("Niveles");
  const arrows = createRefArray<Line>();
  piramid().add(
    <Line
      points={[[0, 0], [200, 0]]}
      ref={arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );

  piramid().add(
    <Line
      points={[[0, 125], [300, 125]]}
      ref={arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );
  piramid().add(
    <Line
      points={[[0, 275], [400, 275]]}
      ref={arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );
  piramid().add(
    <Line
      points={[[0, 425], [500, 425]]}
      ref={arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );
  for (const ar of arrows) {
    yield* ar.end(1, 0.5);
  }
  const arrow_txt = createRefArray<Txt>();
  piramid().add(
    <Txt ref={arrow_txt} opacity={0} fill={"white"} position={[400, 0]}>
      Administrativo
    </Txt>,
  );

  piramid().add(
    <Txt ref={arrow_txt} opacity={0} fill={"white"} position={[500, 125]}>
      Superior
    </Txt>,
  );
  piramid().add(
    <Txt ref={arrow_txt} opacity={0} fill={"white"} position={[600, 275]}>
      Conocimiento
    </Txt>,
  );
  piramid().add(
    <Txt ref={arrow_txt} opacity={0} fill={"white"} position={[700, 425]}>
      Operativo
    </Txt>,
  );
  for (const ar of arrow_txt) {
    yield* ar.opacity(1, 0.5);
  }

  yield* beginSlide("Añadir_sistemas");
  yield* piramid().position([0,-200],1);
  const added_arrows = createRefArray<Line>();

  view.add(
    <Line
      points={[[-400, -400], [-400, 400]]}
      ref={added_arrows}
      stroke={"white"}
      lineWidth={5}
      end={0}
    />,
  );

  view.add(
    <Line
      points={[[-400, -400], [-500, -400]]}
      ref={added_arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );

  view.add(
    <Line
      points={[[-400, 0], [-500, 0]]}
      ref={added_arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );

  view.add(
    <Line
      points={[[-400, 400], [-500, 400]]}
      ref={added_arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );
  
  view.add(
    <Line
      points={[[-400, 0], [-200, 0]]}
      ref={added_arrows}
      stroke={"white"}
      lineWidth={5}
      endArrow
      end={0}
    />,
  );


  for (const ar of added_arrows) {
    yield* ar.end(1, 1);
  }

  const added_txt = createRefArray<Txt>();

  view.add(
    <Txt
      ref={added_txt}
      textWrap
      width={150}
      opacity={0}
      fill={"white"}
      fontSize={128}
      position={[-250, -100]}
    >
      +
    </Txt>,
  );

  view.add(
    <Txt
      ref={added_txt}
      textWrap
      width={150}
      opacity={0}
      fill={"white"}
      position={[-800, -400]}
    >
      Sistemas Inalambricos
    </Txt>,
  );

  view.add(
    <Txt
      ref={added_txt}
      textWrap
      width={150}
      opacity={0}
      fill={"white"}
      position={[-800, 0]}
    >
      Sistemas empresariales
    </Txt>,
  );

  view.add(
    <Txt
      ref={added_txt}
      opacity={0}
      textWrap
      width={300}
      fill={"white"}
      position={[-725, 400]}
    >
      Sistemas web y de comercio electronico
    </Txt>,
  );
  for (const ar of added_txt) {
    yield* ar.opacity(1, 1);
  }
  yield* beginSlide("Final");
});
