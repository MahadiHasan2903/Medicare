import React, { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import MyBoookings from "./MyBoookings";
import Profile from "./Profile";
import useGetProfile from "../../hooks/useFetchData";
import { server } from "../../utils/server";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Loader/Error";

const MyAccount = () => {
  const [tab, setTab] = useState("bookings");
  const { dispatch } = useContext(authContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT_SUCCESS" });
  };

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${server}/user/profile/me`);
  console.log("User Data:", userData);

  return (
    <div className="max-w-[1170px] px-5 mx-auto my-[100px]">
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid gap-10 md:grid-cols-3">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor overflow-hidden">
                <img
                  src={userData?.data?.photo}
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full"
                />
              </figure>
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                {userData?.data?.name}
              </h3>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                {userData?.data?.email}
              </p>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                Blood Type:
                <span className="ml-2 text-headingColor text-[22px] leading -8">
                  {userData?.data?.bloodType}
                </span>
              </p>
            </div>

            <div className="mt-[50px] md:mt-[100px]">
              <button
                onClick={handleLogout}
                className="w-full bg-[#181A1E]  p-3 text-[16px] leading-7 rounded-md text-white"
              >
                Logout
              </button>
              <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                Delete Accounts
              </button>
            </div>
          </div>
          <div className="md:col-span-2 md:px-[30px]">
            <div>
              <button
                onClick={() => setTab("bookings")}
                className={`${
                  tab === "bookings"
                    ? "bg-primaryColor text-white font-normal"
                    : ""
                } py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`${
                  tab === "settings"
                    ? "bg-primaryColor text-white font-normal"
                    : ""
                } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Profile Settings
              </button>
            </div>

            {tab === "bookings" && <MyBoookings />}
            {tab === "settings" && <Profile user={userData} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
