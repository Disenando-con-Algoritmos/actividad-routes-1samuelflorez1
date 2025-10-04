import { useEffect, useState } from "react";

import type { products } from "../../types/TypesProducts";
import { getProducts } from "../../services/ProductServices";
import ProductCard from "../../components/ProductCard";

function CatalogProducts() {
    const [producto, setProducto] = useState<products[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducto(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Catálogo de Productos</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {producto.map((productoAlone: products) => (
                        <ProductCard key={productoAlone.id} product={productoAlone} />
                    ))}
                </div>
            </div>
        </>
    );
}
export default CatalogProducts;
