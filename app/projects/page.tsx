import StarrySky from "../components/starry_sky";
import Logo from "../components/logo";
import Ring from "../components/ring";
import Modal from "../components/modal";
export default function Projects() {
  return (
    <>
      <StarrySky />
      <Logo />
      <Modal>
        <h1 className="text-white text-2xl font-bold mb-4">Projects</h1>
        
      </Modal>
      <Ring />
    </>
  );
}
