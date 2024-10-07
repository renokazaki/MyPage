import Contents from "./Components/Contents/Contents";
import Navigation from "./Components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="h-16 hidden sm:block">
        <Navigation />
      </div>
      <div>
        <Contents />
      </div>
    </div>
  );
}
