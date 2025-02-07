import React from "react";

export default function EasyHandlingSection() {
  return (
    <div
      id="about"
      className="w-full lg:w-10/12 mx-auto grid lg:grid-cols-2 gap-6"
    >
      {/* {left section} */}
      <div className="flex flex-col gap-20">
        <div className="pl-8 lg:pl-0">
          <p className="text-orange-400 text-base font-bold">EASY HANDLING</p>
          <p className="text-4xl font-bold leading-relaxed">
            Discover Powerful <br />
            Features To Boost <br />
            {""}
            <span className="Text-orange-400"> Productivity</span>
          </p>
        </div>

{/* two cards section */}

        <div className="grid grid-cols-2 gap-6">
          {/* {first card } */}
          <div className="bg-[#ede4df] shadow-md px-6 py-8 flex flex-col gap-8 rounded-2xl">
            <svg></svg>
            <p className="font-bold text-lg">Multiple user & management</p>
            <div className="flex justify-between">
              <p>Multi User</p>
              <sv></sv>
            </div>
          </div>
        

        {/* second*/}
        <div className="bg-[ede4df] shadow-md px-6 py-8 flex flex-]col gap-8 rounded-2xl">
            <svg></svg>
          <p className="font-bold text-lg">Editable & highly customizable</p>
          <div className="flex justify-between">
            <p>Customization</p>
            <svg></svg>
          </div>
        </div>
      </div>
    </div>

    {/* right section */}


<div> 
    {/* {upper two cards} */}
    <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#ede4df] shadow-md px-6 py-8 flex flex-col gap-8 rounded-2xl">
            svg
            <p className="font-bold text-lg">Advanced online appointment</p>
<div className="flex justify-between">
    <p>Appointment</p>
    svg
</div>
        </div>

        <div className="bg-[#ede4df] shadow-md px-6 py-8 flex flex-col gap-8 rounded-2xl">
            <p className="font-bold text-lg">Advanced online appointment</p>
            <div className="flex justify-between">
                <p>Management</p>
                svg
            </div>
        </div>
    </div>

    {/* {lower two cards} */}
    <div className="grid grid-cols-2 gap-6 mt-4"> 
        <div className="bg-[#ede4df] shadow-md px-6 py-8 flex flex-col gap-8 rounded-2xl">
            svg
            <p className="font-bold text-lg">SuperFast cloud data saved</p>
            <div className="flex justify-between">
                <p>Cloud Server</p>
                svg

            </div>
        </div>

        <div className="bg-[#ede4df] shadow-md px-6 py-8 flex flex-col gap-8 rounded-2xl"> 
            svg
            <p className="font-bold text-lg">User Next Level interface site</p>
            <div className="flex justify-between">
                <p>Website</p>
                svg
                </div>
            </div>
        </div>
    </div>
    </div>


  )
}
