import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import FoodReservation from "../pages/FoodReservation";
import AutoReservation from "../pages/AutoReservation";
import Borrowing from "../pages/Borrowing";
import DailySale from "../pages/DailySale";
import Group from "../pages/Group";
import PerformanceReport from "../pages/PerformanceReport";
import ReservationStatus from "../pages/ReservationStatus";
import PasswordChange from "../pages/PasswordChange";
import BlockAccount from "../pages/BlockAccount";
import EachPerformanceReport from "../pages/EachPerformanceReport";
export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />,
        children : [
            {
                path: "/reserve",
                element : <FoodReservation />
            },
            {
                path: "/auto-reserve",
                element : <AutoReservation />
            },
            {
                path: "/borrowing",
                element : <Borrowing />
            },
            {
                path: "/daily-sale",
                element : <DailySale />
            },
            {
                path: "/Group",
                element : <Group />
            },
            {
                path: "/performance-report",
                element : <PerformanceReport />
            },
            {
                path: "/performance-report/:id",
                element : <EachPerformanceReport />
            },
            {
                path: "/reservation-status",
                element : <ReservationStatus />
            },
            {
                path: "/password-change",
                element : <PasswordChange />
            },
            {
                path: "/blockAccount",
                element : <BlockAccount />
            },
        ]
    },

])