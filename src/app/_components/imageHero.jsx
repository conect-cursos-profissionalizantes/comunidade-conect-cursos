import Image from "next/image";

export function ImageHero() {
    return (
        <div>
            <Image
            src="./images/image-hero.svg"
            alt="Imagem principal - uma jovem estudante sorrindo"
            width={500}
            height={500}
            className="mx-auto w-full"
            priority={true}
          />
        </div>
    )
}