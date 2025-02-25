import { Outlet } from "react-router";

function AuthLayout() {
    return (
        <div className="flex justify-center p-8">
            <div className="max-w-[250px]">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;