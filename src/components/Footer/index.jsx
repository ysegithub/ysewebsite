import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-neutral-200 p-4 text-center shadow-md shadow-slate-500/20">
        <h1>:يمكنكم التواصل معنا عبر</h1>
        <div className="flex md:flex-row flex-col justify-center">
          <p className="m-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-3 h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            +967 779 883 882
          </p>
          <p className="m-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-3 h-5 w-5"
            >
              <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"></path>
            </svg>
            inf@rece-yemen
          </p>
        </div>
      </div>
      <div class="bg-neutral-200 p-4 text-center shadow-md shadow-slate-500/20">
        <span>© 2023 Copyright: </span>
        <a class="font-semibold text-slate-500" href="#">
          3rd Natinal Renewable Energy Conference & Exhibition
        </a>
      </div>
    </div>
  );
}
