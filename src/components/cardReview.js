import React,{ useRef, useState} from 'react';
import Slider from 'react-slick';
import CardTestimonial from './CardTestimonial';
import Title from './Title';
import fnRight from "../assets/Right";
import fnLeft from "../assets/left.png";


const testimonials =[
  {
    name: "Alex",
    address: "Klaten,Jawa Tengah",
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
  },
  {
    name: "Alex",
    address: "Klaten,Jawa Tengah",
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
  },
  {
    name: "Alex tri hardono",
    address: "Klaten,Jawa Tengah",
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
  },
  {
    name: "felix chow",
    address: "Klaten,Jawa Tengah",
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
  },
  {
    name: "mandrew",
    address: "Klaten,Jawa Tengah",
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
  },
  {
    name: "jonathan nathan narirow",
    address: "Klaten,Jawa Tengah",
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
  },
  {
    name: "johanson sineray",
    address: "Klaten,Jawa Tengah",
    comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
  },
];



export default function CardReview() {
  const [indexSlick, setIndexSlick] = useState(0);

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    afterChange: (index) => setIndexSlick(index),
  };

  const slickRef = useRef();

  function fnNext(){
    slickRef?.current?.slickNext();
  }

  function fnPrev() {
    slickRef?.current?.slickPrev();
  }

  return (
    <div>
      <Title
      title={"Trusted by thousands of Happy Customor"}
      desc={`These are the stories of our customers who have joined us with great
      pleasure when using this crazy feature.`}
      />

      <div className="">
        <Slider {...settings} arrows={false} ref={slickRef}>
          {testimonials.map((val,index) => (
            <div className= {index === 0}>
              <CardTestimonial {...val} key={index} isSelect={index === 0}/>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container max-w-6xl mx-auto flex flex-row justify-between items-center mt-12">
        <div className="flex space-x-2">
          {testimonials.map(( val,index) => (
            <div className={`${
              indexSlick === index ? "w-8 bg-red-500 transition-all duration-200 ease-in-out"
              : "w-4 py-2 bg-gray-500 transition-all duration-200 ease-in-out"
            }h-4 rounded-full`}>
            </div>
          ))}
        </div>
        <div className="flex flex-row space-x-5 space-y-2">
          <div className="flex self-center border border-red-500 hover:bg-slate-200 rounded-full p-5 cursor-pointer" 
          onClick={() => fnPrev()}
          >
            <img alt="arrow-left" src={fnLeft} className="w-5 h-5"/>
          </div>
          <div className="flex self-center bg-red-500 hover:bg-red-700 rounded-full p-5 cursor-pointer"
          onClick={() => fnNext()}
          >
            <img alt="arrow-right" src={fnRight} className="w-5 h-5"/>

          </div>

        </div>
      </div>
    </div>

  )
}