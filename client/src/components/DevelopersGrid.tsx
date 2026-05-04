import { Developer } from "@/types/developer";
import developersData from "@/data/developers.json";
import { FaCodeCommit } from "react-icons/fa6";
import { IoIosCode } from "react-icons/io";

const DeveloperCard: React.FC<Developer> = ({
  name,
  post,
  image,
  facebook = "#",
  role,
}) => {
  return (
    <a
      href={facebook}
      className="group relative block h-auto w-full max-w-[260px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-primary-300"
    >
      <div className="relative h-full w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-primary-300/20 blur-2xl" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 py-4 text-center">
        <div className="from-white/28 via-white/12 pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-t to-transparent backdrop-blur-[16px]" />
        <h2 className="text-2xl font-medium tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {name}
        </h2>
        <p className="text-sm font-medium text-primary-200/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {post}
        </p>
        <p className="text-sm text-white/70 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {role}
        </p>
      </div>
    </a>
  );
};

const DevelopersGrid: React.FC = () => {
  return (
    <div className="container-c min-h-screen px-8 pb-16 pt-36">
      <div className="mb-12 text-center">
        <h2 className="title Bebas my-2 pb-1 text-center text-4xl md:text-5xl lg:mb-0 lg:mt-0">
          <IoIosCode className="icn-inline text-primary-300" /> DEVELOPERS
        </h2>
        <p className="text-white/50">
          The site developers are a passionate team dedicated to creating a
          dynamic and user-friendly platform, constantly innovating to enhance
          functionality and design.
        </p>
      </div>
      {Object.keys(developersData).map((type) => (
        <>
          <h3
            className="mx-auto mb-8 max-w-7xl text-center text-4xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #9364fa 0%, #783DF9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {type}
          </h3>

          <div className="mx-auto mb-12 flex w-full flex-wrap justify-center gap-8">
            {(developersData as any)[type].map((developer: any, index: any) => (
              <DeveloperCard key={index} {...developer} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default DevelopersGrid;
