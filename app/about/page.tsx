import StarrySky from "../components/starry_sky";
import Logo from "../components/logo";
import Ring from "../components/ring";
import Modal from "../components/modal";
export default function About() {
  return (
    <>
      <StarrySky />
      <Logo />
      <Modal>
        <h1 className="text-white text-2xl font-bold mb-4">About</h1>
        <p className="text-white space-y-4">
        Welcome to the Web presence of the Pi Tau Zeta fraternity of <a href="https://mit.edu" className="text-blue-500">MIT</a>, located on the 2nd floor of the West parallel of <a href="https://ec.mit.edu" className="text-blue-500">EAsT camPUS</a>. Like most frats, we -- wait, no. We&apos;re not like most frats. In fact, we&apos;re not really a frat at all. For the most part, we don&apos;t even like frats. We&apos;re Putz: Committed to Overdesign. We take ridiculous ideas and make them reality... like turning old computers into fishtanks. Unfortunately for you, most of our projects are classified code orange. If you want clearance, you&apos;ll have to visit us in person. But since you&apos;re here, check out our unclassified information.
        </p>
        <p className="text-white text-sm mt-4">This site maintained by The Putz Web Strike Team. Last updated: 12/9/2024 by spruce.</p>
      </Modal>
      <Ring />
    </>
  );
}
