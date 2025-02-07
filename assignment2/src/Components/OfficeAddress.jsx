import React from "react";

export default function OfficeAddress() {
  return (
    <div id="contacts classname=bg-[#fff9f5]">
      <div classname="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
        <div classname="flex items-center gap-4 bg-white p-6 rounded-md">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
         fill="currentColor" 
         d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"/>
         </svg>

          <p>
            <span classname="text-2xl font-bold"> Office address</span>2 Holt
            Street, Surry Hills ,Australia
          </p> <br/>
        </div>

        <div classname="flex items-center gap-4 bg-white p-6 rounded-md">
        <svg
         xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <path
             fill="#34484c"
              d="M39.597 39.598c-2.814.103-8.339 2.789-11.526 6.58c-5.113-7.18-6.146-16.374-4.55-25.06c3.056 1.915 6.479 3.046 8.46 2.978c4.155-.153 7.326-5.657 7.093-12.313C38.84 5.128 35.288-.146 31.141-.001c-4.15.142-14.187 5.894-13.958 12.554c.011.225.058.446.089.672c-.967 1.807-1.273 4.242-1.662 6.169c-2.034 10.07-.679 20.969 4.652 29.82c1.459 2.412 3.742 5.906 6.678 6.782c2.958 4.649 10.207 7.817 13.503 7.699c4.154-.147 7.322-5.657 7.094-12.315c-.237-6.652-3.786-11.925-7.94-11.781"/><path fill="#243438" d="M41.19 39.743c-2.821.104-8.342 2.789-11.53 6.583c-5.117-7.182-6.15-16.375-4.55-25.06c3.056 1.914 6.476 3.044 8.458 2.978c4.156-.153 7.329-5.657 7.092-12.315C40.431 5.276 36.877.002 32.723.148c-4.146.144-14.179 5.896-13.95 12.554c.008.225.055.446.085.672c-.967 1.805-1.273 4.242-1.662 6.169c-2.034 10.07-.675 20.967 4.655 29.817c1.453 2.414 3.739 5.908 6.678 6.782c2.955 4.652 10.204 7.819 13.503 7.699c4.15-.146 7.318-5.657 7.09-12.313c-.236-6.652-3.78-11.924-7.932-11.783"/>
        </svg>
          <p>
            <span classname="text-2xl font-bold">
              Telephone number 1-888-452-1505
            </span>
            {""} <br />
          </p>
        </div>

<div classname="flex items-center gap-4 bg-white p-6 rounded-md">
<svg
 xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
    <path
     fill="currentColor"
      d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9"/>
</svg>
    <p><span classname="text-2xl font-bold">Mail address supprot22@gmail.com</span>
    </p> <br/>
</div>
      </div>
    </div>
  );
}
