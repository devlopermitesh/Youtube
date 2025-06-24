import React from "react";

const authLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex justify-center items-center">
        {children}
    </div>
);

export default authLayout;