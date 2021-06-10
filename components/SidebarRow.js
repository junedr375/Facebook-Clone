import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex p-2 items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        ></Image>
      )}

      {Icon && <Icon className="h-8 w-8 text-blue-500 "></Icon>}
      <p className="hidden sm:inline-flex font-medium items-center  text-blue-500 font-sans">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
