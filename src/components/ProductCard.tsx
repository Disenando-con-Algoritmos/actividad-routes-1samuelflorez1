import type { products } from "../types/TypesProducts";

function ProductCard({ product }: { product: products }) {
    return (
        <>
            <div key={product.id} className="bg-gray-600 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform">
                <figure className="w-full h-56 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </figure>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-sm text-gray-200 mb-2">{product.description}</p>
                    <p className="text-lg font-bold text-gray-100">${product.price}</p>
                    {product.tags.map((tag: string, index: number) => {
                        return (
                            <div key={index} className="badge badge-outline">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
            ;
        </>
    );
}

export default ProductCard;
