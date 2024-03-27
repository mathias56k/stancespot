function CarsList() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 gap-8 lg:mx-auto lg:grid-cols-2 2xl:grid-cols-3 xxl:grid-cols-4">
        <div className="justify-self-center w-[90%] max-w-[700px] lg:max-w-[450px]">
          <div className="rounded-t-[5px]">
            <img src="./car.jpg" className="rounded-t-[5px]" alt="" />
          </div>
          <div className="">
            <div className="bg-[#484848] p-4">
              <div className="h-full flex items-center justify-center">
                <p className="font-mukta font-bold text-3xl text-[#F9F4F5]">
                  Volkswagen Golf
                </p>
              </div>
            </div>
            <div className="w-full bg-[#484848] flex items-center justify-center gap-3 pb-4">
              <p className="font-mukta font-bold text-xl text-[#F9F4F5]">
                @mathias56k
              </p>
              <img src="./estonian-flag.png" className="h-4" alt="" />
            </div>
          </div>
          <div className="bg-[#F9F4F5] rounded-b-[5px] flex items-center justify-center p-2">
            <p className="text-[#343434] font-bold font-mukta text-xl">
              See more
            </p>
          </div>
        </div>
        <div className="justify-self-center w-[90%] max-w-[700px] lg:max-w-[450px]">
          <div className="rounded-t-[5px]">
            <img src="./car2.jpg" className="rounded-t-[5px]" alt="" />
          </div>
          <div className="">
            <div className="bg-[#484848] p-4">
              <div className="h-full flex items-center justify-center">
                <p className="font-mukta font-bold text-3xl text-[#F9F4F5]">
                  Volkswagen Scirocco
                </p>
              </div>
            </div>
            <div className="w-full bg-[#484848] flex items-center justify-center gap-3 pb-4">
              <p className="font-mukta font-bold text-xl text-[#F9F4F5]">
                @bigwheelsbiggerd
              </p>
              <img src="./estonian-flag.png" className="h-4" alt="" />
            </div>
          </div>
          <div className="bg-[#F9F4F5] rounded-b-[5px] flex items-center justify-center p-2">
            <p className="text-[#343434] font-bold font-mukta text-xl">
              See more
            </p>
          </div>
        </div>
        <div className="justify-self-center w-[90%] max-w-[700px] lg:max-w-[450px]">
          <div className="rounded-t-[5px]">
            <img src="./car2.jpg" className="rounded-t-[5px]" alt="" />
          </div>
          <div className="">
            <div className="bg-[#484848] p-4">
              <div className="h-full flex items-center justify-center">
                <p className="font-mukta font-bold text-3xl text-[#F9F4F5]">
                  Volkswagen Scirocco
                </p>
              </div>
            </div>
            <div className="w-full bg-[#484848] flex items-center justify-center gap-3 pb-4">
              <p className="font-mukta font-bold text-xl text-[#F9F4F5]">
                @bigwheelsbiggerd
              </p>
              <img src="./estonian-flag.png" className="h-4" alt="" />
            </div>
          </div>
          <div className="bg-[#F9F4F5] rounded-b-[5px] flex items-center justify-center p-2">
            <p className="text-[#343434] font-bold font-mukta text-xl">
              See more
            </p>
          </div>
        </div>
        <div className="justify-self-center w-[90%] max-w-[700px] lg:max-w-[450px]">
          <div className="rounded-t-[5px]">
            <img src="./car2.jpg" className="rounded-t-[5px]" alt="" />
          </div>
          <div className="">
            <div className="bg-[#484848] p-4">
              <div className="h-full flex items-center justify-center">
                <p className="font-mukta font-bold text-3xl text-[#F9F4F5]">
                  Volkswagen Scirocco
                </p>
              </div>
            </div>
            <div className="w-full bg-[#484848] flex items-center justify-center gap-3 pb-4">
              <p className="font-mukta font-bold text-xl text-[#F9F4F5]">
                @bigwheelsbiggerd
              </p>
              <img src="./estonian-flag.png" className="h-4" alt="" />
            </div>
          </div>
          <div className="bg-[#F9F4F5] rounded-b-[5px] flex items-center justify-center p-2">
            <p className="text-[#343434] font-bold font-mukta text-xl">
              See more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
