import Contents from "./Components/Contents/Contents";
import Navigation from "./Components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="fixed top-0 left-0">
        <Navigation />
      </div>
      <div className="mt-16">
        <Contents />
      </div>
    </div>
  );
}
