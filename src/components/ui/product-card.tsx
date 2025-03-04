import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  name: string
  price: string
  image: string
  href: string
}

export function ProductCard({ name, price, image, href }: ProductCardProps) {
  return (
    <Link href={href} className="group w-full">
      <div className="bg-white p-2 sm:p-4 rounded-md  border-2 h-[300px] sm:h-[350px] md:h-[400px] w-full">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden bg-gray-100 rounded-md">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 
                   (max-width: 768px) 50vw, 
                   (max-width: 1024px) 33vw, 
                   25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <div className="mt-2 sm:mt-4 text-center">
          <h3 className="text-sm sm:text-base font-medium truncate">{name}</h3>
          <p className="text-sm sm:text-base font-bold mt-1">{price}</p>
        </div>
      </div>
    </Link>
  )
}

