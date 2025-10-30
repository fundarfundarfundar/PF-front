"use client";

import { MockProjects } from "@/helpers/MockProjects";
import { useParams } from "next/navigation";
import { projectCategories } from "@/helpers/categories";
import { TitleCategory } from "@/components/common/Typography";
import ProjectCard from "@/components/projects/ProjectCard";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };

  const categoryInfo = projectCategories.find((cat) =>
    cat.route.endsWith(`/${category}`)
  );
  //   const [isLoading, setIsLoading] = useState(true);

  const categoryTitle = categoryInfo?.title || "CATEGORY";

  //   const [products, setProducts] = useState<IProduct[]>([]);

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       setIsLoading(true);
  //       try {
  //         const allProducts = await getAllProducts();
  //         const currentCategoryId = CATEGORY[category as keyof typeof CATEGORY];
  //         const filteredProducts = allProducts.filter(
  //           (productItem) => productItem.categoryId === currentCategoryId
  //         );
  //         setProducts(filteredProducts);
  //       } catch (err) {
  //         console.error("Error creando orden", err);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchProducts();
  //   }, [category]);

  return (
    <section>
      <hr className="border-gray-medium"></hr>
      <TitleCategory>{categoryTitle}</TitleCategory>
      <div className="relative bg-gray-soft px-7 lg:pt-20 lg:px-30 lg:pb-10">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10">
          {MockProjects.map((projectItem) => (
            <ProjectCard project={projectItem} key={projectItem.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
