import React from "react";

export const FooterComponent = () => {
  return (
    <div>
      <footer>
        <div className="h-10 w-full bg-slate-900 border-t-2 border-red-500 flex justify-center items-center">
          <footer className="rounded-lg shadow">
            <div className="mx-auto w-full">
              <span className="text-sm text-white flex flex-row gap-2">
                ||<a href="https://banwork.dev/">Bayu Aji Nugroho</a>
                ||<a href="https://banwork.dev/">Muhamad Faqih Azhar</a>
                ||<a href="https://banwork.dev/">Feby Setyany Lestari ||</a>
              </span>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};
