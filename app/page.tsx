import Extensions from "./components/Extentions";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="xl:px-40  md:px-20 sm:px-10 px-5 py-10 flex flex-col gap-10">
        <NavBar />
        <Extensions />
    </div>
  )
}
