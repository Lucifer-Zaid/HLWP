import Image from "next/image";

export function Hero(){
    return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl mb-2">Hi, I am Zaid.</h1>
      <p className="mb-4">A freelance game developer and learning next.js on side. I make a wide variety of educational content with a primary focus on game mechanics.</p>
      <Image src="/hero.png" width={1000} height={192} quality={70} placeholder="blur" blurDataURL="/hero-placeholder.png"
      loading="eager" alt="Hero Image"/>
    </div>
    )
}