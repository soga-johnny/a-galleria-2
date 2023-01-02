// import 'aframe';
import {
  Box,
  // Text,
  Scene,
  // Entity,
  // MarkerCamera,
  Camera,
  Cursor,
  // Marker
} from "react-aframe-ar";


export default function Ar() {
  return (
    <Scene>
      {/* <Entity
        geometry={{ primitive: "box" }}
        material={{ opacity: 0.8, color: "#ff0000" }}
        position={{ x: 0, y: 0.5, z: -3 }}
        scale={{ x: 1, y: 0.5, z: 1 }}
        rotation={{ x: 0, y: -10, z: 5 }}
        animation={{
          property: "rotation",
          from: "0 0 0",
          to: "0 360 0",
          dur: 2000,
          dir: "alternate",
          loop: true
        }}
      /> */}
      <a-marker-camera preset="hiro">
        <Box
          color="#0000ff"
          material={{ opacity: 0.8 }}
          // position="0 0.5 -3"
          scale="1 0.5 1"
          rotation="10 -10 2"
          animation={{
            property: "rotation",
            from: "0 0 0",
            to: "0 360 0",
            dur: 2000,
            dir: "alternate",
            loop: true
          }}
        />
      </a-marker-camera>
      <Camera>
        <Cursor></Cursor>
      </Camera>
    </Scene>
  );
}
