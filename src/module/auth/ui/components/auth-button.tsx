import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

const AuthButton=()=>{
return(
    <>
    <SignedIn>
        <UserButton/>
    </SignedIn>
    <SignedOut>
        <SignInButton mode="modal">
    <Button variant={'outline'} className="px-6 py-2 text-sm font-medium text-blue-600 hover::text-blue-500 border-blue-500/2 rounded-full shadwo-none [&_svg]:size-5">
<UserCircleIcon/>
Sign in
    </Button>
    </SignInButton>

    </SignedOut>
    </>
)
}
export default AuthButton; 