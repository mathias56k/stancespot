function CarsList() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-end items-center w-[90%] mb-2">
        <button className="text-[1.25rem] font-mukta font-bold text-[#F9F4F5] bg-[#484848] rounded-[5px] px-3 py-1">
          Filter
        </button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-[90%]">
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
        <div className="w-[90%]">
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
