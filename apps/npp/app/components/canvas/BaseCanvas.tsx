const BaseCanvas = ({
  canvasRef,
  width,
  height,
}: {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  width: number;
  height: number;
}) => {
  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default BaseCanvas;
