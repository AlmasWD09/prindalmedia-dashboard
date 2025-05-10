import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout"
import CommonDashboard from "../pages/dashboardPages/commonDashboard/CommonDashboard";
import ManageUsers from "../pages/dashboardPages/manageUsers/ManageUsers";
import PostListing from "../pages/dashboardPages/postListing/PostListing";
import MyProfile from "../pages/dashboardPages/myProfile/MyProfile";
import ErrorPage from "../pages/error/ErrorPage";
import DashboardLogin from "../pages/dashboardPages/authentication/DashboardLogin";
import DashboardForgetPassword from "../pages/dashboardPages/authentication/DashboardForgetPassword";
import DashboardOtp from "../pages/dashboardPages/authentication/DashboardOtp";
import DashboardCreateNewPassword from "../pages/dashboardPages/authentication/DashboardCreateNewPassword";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <CommonDashboard />
            },
            {
                path: "/manage-users",
                element: <ManageUsers />
            },
            {
                path: "/post-listing",
                element: <PostListing />
            },
            {
                path: "/profile",
                element: <MyProfile />
            },

        ]
    },
    {
        path: "/login",
        element: <DashboardLogin />
    },
    {
        path: "/forget-password",
        element: <DashboardForgetPassword />
    },
    {
        path: "/otp-code",
        element: <DashboardOtp />
    },
    {
        path: "/create-new-password",
        element: <DashboardCreateNewPassword />
    },
]);

export default router;