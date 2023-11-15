import { Navigate, RouteObject } from "react-router-dom"
import ErrorPage from '@/pages/page404'

import Entry from "@/pages/entry"

const paths:RouteObject[] = [
  {
    path: "/",
    // Component: Home,
    element: <Navigate to={'/app'}></Navigate>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/entry",
    id: 'Entry',
    element: <Entry/>,
  },
]

export default paths