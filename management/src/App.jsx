import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing-page/landing";
import VerifyAuth from "./setup/VerifyAuth";
import NotFound from "./pages/not-found/NotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import DashBoard from "./pages/dashboard/DashBoard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
export default function App() {
  const client = new QueryClient();
  return (
    <div className="App h-screen font-NunitoSans ">
      <QueryClientProvider client={client}>
        <Routes>
          <Route exact path="/" element={<Landing current={false} />} />
          <Route path="/signup" element={<Landing current={false} />} />
          <Route path="/login" element={<Landing current={true} />} />
          {/* <Route element={<VerifyAuth/>}>
          </Route> */}
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer/>
    </div>
  )
}
