import React from "react";
import { server } from "../../utils/server";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Loader/Error";
import useFetchData from "../../hooks/useFetchData";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${server}/user/appointments/my-appointment`);

  //   console.log("Appointments:", appointments);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!loading && !error && appointments && appointments.length > 0) {
    return (
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {appointments.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    );
  }

  return (
    <h2 className="mt-[100px] text-center  leading-7 text-[20px] font-semibold text-primaryColor">
      You have not booked any appointments yet.
    </h2>
  );
};

export default MyBookings;
