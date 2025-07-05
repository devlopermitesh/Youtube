import { cn } from "@/lib/utils"
import { Badge } from "./ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface TipBadgeProps {
  badge: string
  description?: string
  className?: string,
  onClick?:()=>void,
  variant?: "default" | "secondary" | "destructive" | "outline" // extend as per your variants
}

export const Tipbadge: React.FC<TipBadgeProps> = ({
  badge,
  className = "",
  variant = "secondary",
  onClick,
  description,
}) => {
  const badgeElement = (
    <Badge variant={variant} className={cn(" rounded-md text-sm  whitespace-nowrap px-3 py-2 cursor-pointer", className)}>
      {badge}
    </Badge>
  )

  return description ? (
    <TooltipProvider>
      <Tooltip >
        <TooltipTrigger asChild>{badgeElement}</TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    badgeElement
  )
}
