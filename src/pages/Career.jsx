import Lottie from "react-lottie";
import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  MapPin,
  Search,
  UsersRound,
} from "lucide-react";
import animationData from "../assets/job-animation.json";
import { careerCategories, openings } from "../constants";

const Career = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section className="py-20 bg-foreground">
        <div className="wrapper grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="lg:text-5xl sm:text-4xl text-3xl leading-tight font-semibold">
              Find a job that suits your interest and skills.
            </h1>
            <p className="my-2 opacity-60">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              quae voluptas corrupti tempore eos est autem reiciendis accusamus
              aspernatur quo.
            </p>

            <div className="mt-6  flex items-center bg-white shadow rounded-lg  px-1">
              <div className="relative w-full">
                <Search
                  size={18}
                  className="absolute top-1/2 -translate-y-1/2 left-2 text-primary"
                />
                <input
                  type="text"
                  placeholder="Job title, keywords"
                  className="w-full py-2 border outline-none border-none pl-8 pr-2 text-sm rounded-l-lg"
                />
              </div>
              <div className="relative w-full">
                <MapPin
                  size={18}
                  className="absolute top-1/2 -translate-y-1/2 left-2 text-primary"
                />
                <input
                  type="text"
                  placeholder="Your location"
                  className="h-full py-4 w-full outline-none border-none pl-8 pr-2 text-sm"
                />
              </div>
              <button className="btn primary-btn whitespace-nowrap">
                Find Job
              </button>
            </div>
          </div>

          <div className="w-full h-auto">
            <Lottie options={defaultOptions} width={300} height={300} />
          </div>
        </div>

        <div className="wrapper pt-20 grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
            <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
              <BriefcaseBusiness />
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-semibold group-hover:text-primary">
                1234
              </h2>
              <p className="text-sm opacity-60">Live job</p>
            </div>
          </div>

          <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
            <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
              <Building2 />
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-semibold group-hover:text-primary">
                12,334
              </h2>
              <p className="text-sm opacity-60">Companies</p>
            </div>
          </div>
          <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
            <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
              <UsersRound />
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-semibold group-hover:text-primary">
                38,345
              </h2>
              <p className="text-sm opacity-60">Customers</p>
            </div>
          </div>
          <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
            <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
              <BriefcaseBusiness />
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-semibold group-hover:text-primary">
                334
              </h2>
              <p className="text-sm opacity-60">New Hobs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrapper">
          <h1 className="text-xl font-bold opacity-90 mb-6">
            Popular Categories
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {careerCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg "
              >
                <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
                  <category.icon />
                </div>
                <div className="flex-1 space-y-1">
                  <h2 className="text-sm font-semibold group-hover:text-primary">
                    {category.name}
                  </h2>
                  <p className="text-sm opacity-60">
                    {category.position} Open position
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrapper">
          <h1 className="text-xl font-bold opacity-90 mb-6">Featured Job</h1>
          <div className="flex flex-col gap-4">
            {openings.map((opening, index) => (
              <div
                key={index}
                className="flex sm:flex-row flex-col sm:items-center  border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow hover:border-primary "
              >
                <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20"></div>
                <div className="flex-1 gap-4 flex sm:flex-row flex-col smitems-center justify-between">
                  <div>
                    <h2>{opening.position}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 opacity-60">
                        <MapPin size={16} />
                        <span className="text-sm">{opening.location}</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-60">
                        <BriefcaseBusiness size={16} />
                        <span className="text-sm">
                          {opening.vacancy} Opening
                        </span>
                      </div>
                      <div className="flex items-center gap-1 opacity-60">
                        <Calendar size={16} />
                        <span className="text-sm">
                          {opening.experience} Opening
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn primary-btn">Apply now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
