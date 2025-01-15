import { Hero } from "./components/hero";
import { SocialIcons } from "./components/social-icons";
import LatestPost from "./components/latest-post";

export default async function Home() {
  
  return (
    <div>
      <Hero/>
      <SocialIcons/>
      <LatestPost/>
    </div>
  );
}
