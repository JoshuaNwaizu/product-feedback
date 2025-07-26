import { Outlet } from 'react-router';

const AuthLayout = () => (
  <div className="min-h-screen flex text-[#3A4374] items-center justify-center bg-gray-50">
    <div className="w-full max-w-md p-8 md:bg-white  rounded md:shadow">
      <Outlet />
    </div>
  </div>
);

export default AuthLayout;
