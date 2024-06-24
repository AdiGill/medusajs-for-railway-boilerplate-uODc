import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="bg-stone-900 w-full h-screen bg-[url('https://i.ibb.co/TMqH6Cy/Desktop-5.png')]">
      <div className=" flex flex-col small:flex-row small:items-start py-16 content-container">
        {/* <RefinementList sortBy={sortBy || "created_at"} /> */}
        <div className="w-full text-center">
          <div className="mb-8 text-5xl text-white "style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.75)" }}>
            <h1>SHOP</h1>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sortBy || "created_at"}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
