"use client"

import { trpc } from "@/trpc/client"
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import { FilterCarousel } from "@/components/filter-carousel"

interface CateorySectionProps{
    categoryId:string
}

export const CategoriesSection:React.FC<CateorySectionProps>=({categoryId})=>{
    return (
        <Suspense fallback={<h3>Loading...</h3>}>
            <ErrorBoundary fallback={<h2>Errro..</h2>}>
                <CategorySectionSuspence categoryId={categoryId}/>
            </ErrorBoundary>
        </Suspense>
    )
}
const CategorySectionSuspence=({categoryId}:CateorySectionProps)=>{
    const{data:categories,isLoading}=trpc.category.getMany.useQuery()
    const data = categories && categories.map((category) => ({
        value: category.id,
        description: category.description ?? undefined,
        label: category.name
    }));
    return (
        <FilterCarousel isLoading={isLoading} value={categoryId} data={data} />
    )
}