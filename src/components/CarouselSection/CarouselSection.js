import "tw-elements";

// import bgContact from "../../assets/images/bgContact.jpg";
const CarouselSection = () => {
  return (
    <div
      class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover "
      style={{
        backgroundImage:
          "url(https://github.com/rcode321/Acme/blob/master/src/assets/images/bgContact.jpg?raw=true)",
        height: "",
        color: "white",
      }}
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{
          background:
            "linear-gradient(144deg, rgba(0,14,36,1) 8%, rgba(25,111,185,1) 40%, rgba(0,212,255,1) 100%)",
          opacity: "0.3",
        }}
      >
        <div class="flex justify-center items-center h-full"></div>
      </div>
      <div class="text-white ">
        <h2 class="relative  font-semibold text-4xl mb-4 text-zinc-50">
          Our Commitment to Professionals
        </h2>
        <h4 class="font-semibold text-xl mb-6 text-zinc-50">
          We help our partners deliver industry leading results with a
          commitment to excellence, thought-provoking insights and experience
          distribution. We are laser focused on our shared goal- helping clients
          achieve their objectives.
        </h4>
        <a
          class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          href="#!"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default CarouselSection;
