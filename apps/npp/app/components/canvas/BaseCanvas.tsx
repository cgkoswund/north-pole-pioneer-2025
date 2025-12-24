import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const BaseCanvas = ({
  canvasRef,
  width,
  height,
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  width: number;
  height: number;
}) => {
  return (
    <div>
      <Canvas ref={canvasRef}>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BaseCanvas;
