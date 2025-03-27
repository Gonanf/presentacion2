import {Circle, makeScene2D, Path} from '@motion-canvas/2d';
import {createRef, createRefArray, waitUntil, beginSlide} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here

  const levels = createRefArray<Path>();

  view.add(<Path
    ref={levels}
    lineWidth={4}
    stroke={'black'}
    fill={"white"}
    data='M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z'
    position={[-100, -100]}
    scale={0.25}
    opacity={0}
  ></Path>);

  view.add(<Path
    ref={levels}
    lineWidth={4}
    stroke={'black'}
    opacity={0}

    fill={"white"}
    data='M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z'
    position={[-100, 50]}


    scale={0.25}
  ></Path>);

  view.add(<Path
    ref={levels}
    lineWidth={4}
    stroke={'black'}
    opacity={0}

    fill={"white"}
    data='M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z'
    position={[-100, 200]}
    scale={0.25}
  ></Path>);

  view.add(<Path
    ref={levels}
    lineWidth={4}
    opacity={0}
    stroke={'black'}

    fill={"white"}
    data='M25.508,12.011 L576.715,12.011 L576.715,584.766 L25.508,584.766 L25.508,12.011 z'
    position={[-100, 350]}
    scale={0.25}
  ></Path>);

  title().text('Introduccion');
  yield* beginSlide('Introduccion');
for (const lev of levels){
  yield* lev.opacity(1,1);
}

yield* levels[0].data("M301.113,12.011L576.715,584.766L25.508,584.766L301.113,12.011z",1);

    yield* waitUntil('ola');
});
