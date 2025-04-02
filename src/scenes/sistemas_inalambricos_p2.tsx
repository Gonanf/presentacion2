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
  
  yield* slideTransition(Direction.Left);

  const cir = createRefArray<Circle>();
  const cir_txt = createRefArray<Txt>();
  view.add(<Circle ref={cir} opacity={0} fill={"white"} position={[-600,-200]}><Txt textWrap width={440} textAlign={"center"} ref={cir_txt}>M-Commerce</Txt></Circle>)
  yield* all(cir[0].width(300,1),cir[0].height(300,1),cir[0].opacity(1,1),cir[0].fill("cyan",1))
  view.add(<Circle ref={cir} opacity={0} fill={"white"} position={[0,0]}><Txt ref={cir_txt}>WLAN</Txt></Circle>)
  yield* all(cir[1].width(300,1),cir[1].height(300,1),cir[1].opacity(1,1),cir[1].fill("purple",1))
  view.add(<Circle ref={cir} opacity={0} fill={"white"} position={[600,-200]}><Txt ref={cir_txt}>WIFI/Bluethooth</Txt></Circle>)
  yield* all(cir[2 ].width(400,1),cir[2].height(400,1),cir[2].opacity(1,1),cir[2].fill("green",1))


  yield* beginSlide("M-Commerce")
  const svg_rp = createRefArray<Img>();
  cir[0].add(<Img ref={svg_rp} src={store} width={100} height={100} opacity={0} position={[0,100]}></Img>)
  yield* all(cir[0].width(500,1),cir[0].height(500,1),cir_txt[0].position([0,-100],1), cir_txt[0].text("Comercio electronico inalambrico",1),svg_rp[0].opacity(1,1));

  yield* beginSlide("WLAN");
  const lines = createRefArray<Line>();
  view.add(<Line ref={lines} stroke={"purple"} end={0} lineWidth={5} points={[[0,0],[-150,200]]}></Line>)
  view.add(<Line ref={lines} stroke={"purple"}  end={0} lineWidth={5} points={[[-200,250],[100,400]]}></Line>)
  view.add(<Line ref={lines} stroke={"purple"}  end={0} lineWidth={5} points={[[100,400],[0,0]]}></Line>)
  
  const wlan_cir = createRefArray<Circle>();
  view.add(<Circle ref={wlan_cir} fill={"purple"} opacity={0} position={[-200,250]} width={150} height={150}></Circle>)
  view.add(<Circle ref={wlan_cir} fill={"purple"} opacity={0} position={[150,425]} width={200} height={200}></Circle>)
  
  for (const [index, value] of lines.entries()){
    yield* value.end(1,0.5);
    if (index != 2){yield* wlan_cir[index].opacity(1,0.5)}
  }

  yield* beginSlide("Conexiones");
  cir[2].add(<Img ref={svg_rp} src={device} width={100} height={100} opacity={0} position={[-100,100]}></Img>)
  cir[2].add(<Img ref={svg_rp} src={wave} width={100} height={100} opacity={0} position={[0,100]}></Img>)
  cir[2].add(<Img ref={svg_rp} src={device} width={100} height={100} opacity={0} position={[100,100]}></Img>)
  
  yield* all(cir[2].width(700,1),cir[2].height(700,1),cir_txt[2].position([0,-100],1),... svg_rp.map(svg => svg.opacity(1,1)));


  yield* beginSlide("Final2");
}

);
