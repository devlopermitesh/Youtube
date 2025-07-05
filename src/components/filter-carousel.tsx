"use client"

import { cn } from "@/lib/utils"
import { Tipbadge } from "./Tip_Badge"
import { Badge } from "./ui/badge"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel"
import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton"

interface FilterCarouselProps {
  value?: string | null
  isLoading: boolean
  onSelect?: (value: string | null) => void
  data: {
    value: number
    label: string
    description?: string
  }[]|undefined
}

export const FilterCarousel = ({
  value,
  onSelect,
  data,
  isLoading=true,
}: FilterCarouselProps) => {
    const [api,setApi]=useState<CarouselApi>();
    const [current,setcurrent]=useState(0);
    const [count,setcount]=useState(0);
    useEffect(()=>{
if(!api){
return;
}
setcount(api.scrollSnapList.length)
setcurrent(api.selectedScrollSnap()+1);
api.on("select",()=>{
    setcurrent(api.selectedScrollSnap()+1);
})
    },[api])
  return (
    <div className="relative w-full">
      {/* Left Gradient */}
      <div className={cn("pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-black",current==1 && "hidden")} />

      {/* Right Gradient */}
      <div className={cn("pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-black",current===count && "hidden")} />

      {/* Carousel */}
      <Carousel setApi={setApi} opts={{ align: "start", dragFree: true }} className="w-full px-6">
        <CarouselContent className="-ml-1">
            {
                isLoading?(
                    Array.from({length:13}).map((category,index)=>(
<CarouselItem key={index} className="basis-auto px-2">
<Skeleton className="rounded-md text-sm cursor-pointer whitespace-nowrap px-3 py-2 text-gray-200">
Loading..
</Skeleton>
</CarouselItem>))

                ):(
           <>
           <CarouselItem className="basis-auto px-1">
            <Badge
              variant={value == null ? "default" : "secondary"}
              onClick={() => onSelect?.(null)}
              className="rounded-md text-sm cursor-pointer whitespace-nowrap px-3 py-2"
            >
              All
            </Badge>
          </CarouselItem>

          {data && data.map((category) => (
            <CarouselItem key={category.value} className="basis-auto px-1">
              <Tipbadge
                badge={category.label}
                description={category.description}
                onClick={() => onSelect?.(String(category.value))}
                className={
                  value === String(category.value) ? "bg-primary text-white" : ""
                }
              />
            </CarouselItem>
          ))}
           </>         
                )
            }
            
        </CarouselContent>
      </Carousel>
    </div>
  )
}
