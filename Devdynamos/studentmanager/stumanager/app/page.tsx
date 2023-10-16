import getCurrentUser from "@/app/actions/getCurrentUser";
import { Hero } from "./components/hero-section/Hero";

const Home = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return (

      <div className="">
        <Hero />
      </div>

    );
  }else{
    return <h1 className="pt-36 text-6xl pl-5">Login to Continue.</h1>
  }
  
}

export default Home;
