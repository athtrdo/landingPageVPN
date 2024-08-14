import logo from "./assets/logo.png";
import illustration from "./assets/Illustration_1.png";
import illustration_2 from "./assets/Illustration_2.png";
import icon_user from "./assets/Icon/user.png";
import icon_location from "./assets/Icon/location.png";
import icon_server from "./assets/Icon/Server.png";
import checklist from "./assets/Icon/checklist.png";
import Global from "./assets/Global.png";
import sponsored from "./assets/Sponsored.png"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Title from "./components/Title";
import CardReview from"./components/cardReview";
import CardPlan from "./components/CardPlan";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";


function App() {
  const menus = ["About", "Features", "Pricing", "Testimonials", "Help"];
  const section3 = [
    {
      icon: icon_user,
      label: "Users",
      total: "30+",
    },
    {
      icon: icon_location,
      label: "Location",
      total: "30+",
    },
    {
      icon: icon_server,
      label: "Server",
      total: "30+",
    },
  ];

  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];

  const plans = [
    {
      title: "Free Plan",
      features2: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standard Plan",
      features2: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      features2: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      price: "$12 / mo",
    },
  ];

// start Navbar
  return (
    <div className="bg-white">
      <header className="container max-w-6xl mx-auto flex flex-row pt-11 items-center space-x-36">
        <img alt="icon-lasLesVpn" src={logo} className="w-36" />
        <div className="flex-1 ">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button className="font-bold">Sign In</button>
          <button className="border border-red-500 rounded-full py-2 px-6">
            Sign Un
          </button>
        </div>
      </header>
  {/* End of Navbar */}
      <main>
        <div className="container max-w-6xl mx-auto grid grid-cols-2 py-24">
          <div>
            <h1 className=" font-medium text-4xl pb-5">
              Want anything to be
              <br />
              easy with <strong> LasLesVpn</strong>
            </h1>
            <div className="font-normal text-xs pb-12 max-w-md">
              Provide a network for all your needs with ease and fun using
              <strong> LaslesVPN </strong>
              discover interesting features from us.
            </div>
            <button className="bg-red-600 rounded-2xl py-3 px-11 text-white drop-shadow-4xl">
              Get Started
            </button>
          </div>
          <div>
            <img alt="illusttration" src={illustration} />
          </div>
        </div>
        <div className="container max-w-6xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4 space-x-6 justify-center ${
                  index + 1 !== section3.length && "border-r border-gray-200"
                }`}
              >
                <div className="rounded-full bg-red-200 p-3">
                  <img alt={val.label} src={val.icon} className="h-6 w-6" />
                </div>
                <div>
                  <div>{val.total}</div>
                  <div>{val.label}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container max-w-6xl mx-auto grid grid-cols-2 py-24 items-center">
          <img alt="illustration_2" src={illustration_2} />
          <div className=" px-16 space-y-4">
            <div className="font-medium text-3xl">
              We Provide Many
              <br />
              Features You Can Use
            </div>
            <div>
              You can explore the features that we provide with fun and
              <br />
              have their own functions each feature.
            </div>
          
              {features.map((val, index) => {
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      alt="features-checklist"
                      src={checklist}
                      className="w-6 h-6"
                    />
                    <div className=" text-xs">{val}</div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className=" bg-gray-50 py-24">
          <Title
            title={"Choose Your Plan"}
            desc={`Let's choose the package that is best for you and explore it
            happily and
            cheerfully.`}
          /> 

          <div className="container max-w-6xl mx-auto grid grid-cols-3 space-x-6">
            {plans.map((val, index) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
              );
            })}
          </div>
          <div className="conatainer max-w-6xl mx-auto py-24">
            <Title
              title={"Huge Global Network"}
              title2={"of Fast VPN"}
              desc={`See LaslesVPN everywhere to make it easier for you when you move`}
              desc2={"locations."}
            />
            <img alt="Global" src={Global} className="my-20"/>
            <div className="max-w-6xl mx-auto justify-center">
              <img alt="sponsored" src={sponsored}/>
            </div>
          </div>
          <CardReview/>
        </div>
        <div className=" bg-gray-100">
          <Subscribe/>
        </div>
      </main>
      <div>
      <footer className="bg-gray-100 py-16">
      <Footer/>
      </footer>
      </div>
      
    </div>
  );
}

export default App;
