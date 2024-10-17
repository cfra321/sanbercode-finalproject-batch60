import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

function LogoSlider() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 5,  // Display 5 logos per view
    spacing: 16,       // Spacing between slides
  });

  useEffect(() => {
    // Set up a custom interval for auto-scrolling
    const interval = setInterval(() => {
      if (slider) {
        slider.current?.next(); // Move to the next slide
      }
    }, 3000); // Delay in milliseconds between slides

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="relative bg-gray-200">
      {/* SVG Background */}
      <div className="absolute inset-0 overflow-hidden"></div>
      
      {/* Content */}
      <div className="relative container mx-auto text-center flex-grow p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Trusted By</h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide flex justify-between items-center">
            <div>
              <img src="https://bankraya.co.id/img/logo.png" alt="Bank Raya" className="h-16" />
            </div>
            <div>
              <img src="https://www.megafinance.co.id/wp-content/smush-webp/2023/10/Logo-Mega-Finance.png.webp" alt="Bank Mega" className="h-16" />
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1280px-Bank_Central_Asia.svg.png" alt="Bank BCA" className="h-16" />
            </div>
            <div>
              <img src="https://vectorez.biz.id/wp-content/uploads/2023/10/Logo-Bank-Mandiri.png" alt="Bank Mandiri" className="h-16" />
            </div>
            <div>
              <img src="https://womensfootballawards.com/wp-content/uploads/2024/03/Standard-Chartered-.png" alt="Standard-Chartered" className="h-16" />
            </div>
          </div>
          <div className="keen-slider__slide flex justify-between items-center">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Logo-maybank.png" alt="Maybank" className="h-16" />
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/id/1/18/DBS_Bank_Logo1.png" alt="DBS Bank" className="h-16" />
            </div>
            <div>
              <img src="https://ajaib.co.id/wp-content/uploads/2022/06/AJAIB-ASA-BLUE.png" alt="Ajaib" className="h-16" />
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Logo-jago.svg/800px-Logo-jago.svg.png" alt="Bank Jago" className="h-16" />
            </div>
            <div>
              <img src="https://womensfootballawards.com/wp-content/uploads/2024/03/Standard-Chartered-.png" alt="Standard-Chartered" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
