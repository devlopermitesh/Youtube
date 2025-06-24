import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

const AuthButton=()=>{
return(
    <Button variant={'outline'} className="px-6 py-2 text-sm font-medium text-blue-600 hover::text-blue-500 border-blue-500/2 rounded-full shadwo-none [&_svg]:size-5">
<UserCircleIcon/>
Sign in
    </Button>
)
}
export default AuthButton; 