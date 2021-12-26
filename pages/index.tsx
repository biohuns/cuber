import Cube from "../components/Cube";
import Timer from "../components/Timer";

export default function Home() {
  return (
    <main>
      <Timer></Timer>
      <Cube width={300} height={300}></Cube>
    </main>
  );
}
