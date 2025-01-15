import Image from "next/image";
import Link from "next/link"

const socials= [
{ 
   name: "Youtube"
  ,url:"https://youtube.com/@ZaidEjaz-infoP"
  ,image:"youtube.svg"
  ,alt:"Follow Zaid on Youtube"
}
  ,
{
  name: "Github"
  ,url:"https://github.com/Lucifer-Zaid"
  ,image:"github.svg"
  ,alt:"Code for the project is here"

}
]
export function SocialIcons(){
    return (
      <div className="mb-4 flex justify-between">
      <h2 className=" font-bold text-2xl text-amber-700">Social Media</h2>
      <div className="flex gap-2">
        {socials.map((items) => (
          <Link
            key={items.name}
            href={items.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-1 rounded-md hover:scale-110 transition duration-3"
          >
            <Image
              src={`/social-icons/${items.image}`}
              alt={items.alt}
              width={20}
              height={20}
              loading="eager"
            />
          </Link>
        ))}
      </div>
    </div>
    )
}