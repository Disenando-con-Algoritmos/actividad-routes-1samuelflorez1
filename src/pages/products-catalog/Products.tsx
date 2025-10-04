import { useEffect, useState } from "react";

import type { products } from "../../types/TypesProducts";

function CatalogProducts() {
    const [producto, setProducto] = useState<products[]>([]);

    useEffect(() => {
        fetch("/dmi/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducto(data));
    }, []);

    return (
        <>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Catálogo de Productos</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {producto.map((productoAlone) => (
                        <div key={productoAlone.id} className="bg-gray-600 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform">
                            <figure className="w-full h-56 overflow-hidden">
                                <img src={productoAlone.image} alt={productoAlone.name} className="w-full h-full object-cover" />
                            </figure>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{productoAlone.name}</h2>
                                <p className="text-sm text-gray-200 mb-2">{productoAlone.description}</p>
                                <p className="text-lg font-bold text-gray-100">${productoAlone.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CatalogProducts;
