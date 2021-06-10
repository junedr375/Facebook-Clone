import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-56 cursor-pointer overflow-x p-3">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 border-white border-dashed hover:animate-pulse"
        src={profile}
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
      ></Image>
      <Image
        className="object-cover rounded-full filter lg:rounded-3xl brightness-75"
        src={src}
        layout="fill"
      ></Image>
    </div>
  );
}

export default StoryCard;
