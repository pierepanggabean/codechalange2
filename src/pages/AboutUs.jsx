import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section className="company-history">
        <div className="overview">
          <p className="text-lg text-left px-32 py-4 font-semibold">
            PT Bank Jaya Abadi
          </p>
          <p className="text-lg text-left px-32 py-4">
            Berawal dari Sebuah Mimpi, Membangun Masa Depan
          </p>
          <p className="text-lg text-justify px-32">
            PT Bank Jaya Abadi lahir dari tekad seorang visioner, Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Laboriosam recusandae
            possimus reprehenderit illo dignissimos nobis autem, assumenda, quis
            nisi, eveniet consequatur perferendis facere aut veritatis
            cupiditate impedit nam quos numquam.
          </p>
        </div>
      </section>

      <section className="team">
        <section className="container m-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold py-8">Teams</h1>
            <p className="text-lg text-center px-32">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae, beatae. Sequi reprehenderit dolores ab repellendus
              itaque quae repudiandae quod dicta pariatur at sapiente vel, ipsa
              ipsam neque velit odio quasi, magnam rem. Alias ratione veritatis,
              porro architecto ea dolor possimus voluptatum est. Nisi
              consequatur, unde nulla iusto ex est non?
            </p>
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex items-center justify-between gap-10">
                <div className="w-1/3 text-right">
                  <span className="text-xl font-semibold">Gregius Roben</span>
                  <h2 className="text-2xl font-medium">
                    Chief Executive Officer
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    sapiente velit eligendi quam quod porro exercitationem
                    doloremque perferendis quas vitae.
                  </p>
                </div>
                <div className="flex w-52 h-52 overflow-hidden rounded-full border-4 border-gray-400">
                  <img
                    className="w-full object-cover object-center grayscale"
                    src="https://th.bing.com/th/id/OIP.IbKbZmpzkpWInIuCjrxhqgHaF7?rs=1&pid=ImgDetMain"
                    alt=""
                  />
                </div>
                <span className="flex w-1/3" />
              </div>
              <div className="flex items-center gap-10 justify-between">
                <span className="flex w-1/3" />
                <div className="flex w-52 h-52 overflow-hidden rounded-full border-4 border-gray-400">
                  <img
                    className="w-full object-cover object-center grayscale"
                    src="https://th.bing.com/th/id/OIP.IbKbZmpzkpWInIuCjrxhqgHaF7?rs=1&pid=ImgDetMain"
                    alt=""
                  />
                </div>
                <div className="w-1/3">
                  <span className="text-xl font-semibold">Gregius Roben</span>
                  <h2 className="text-2xl font-medium">
                    Chief Executive Officer
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    sapiente velit eligendi quam quod porro exercitationem
                    doloremque perferendis quas vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="culture">
        <div className="description">
          <p className="text-lg text-left px-32 py-4 font-semibold">Culture</p>
          <p className="text-lg text-justify px-32">
            Company culture description here... Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Harum suscipit voluptates rem tempora
            sit nulla assumenda quam facilis, fugiat hic esse quasi consectetur
            molestiae nisi consequuntur autem fuga perspiciatis nam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
