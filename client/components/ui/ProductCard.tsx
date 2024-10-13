import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<{
  product: { image: string; name: string; description: string };
}> = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded mb-4"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 mt-3">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <Link href="#" className="text-black font-medium hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
