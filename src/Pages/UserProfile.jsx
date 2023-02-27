import { Avatar } from "@mui/material";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import DashboardCard from "../Components/DashboardCard";
import CustomerInfo from "../Components/Profile/CustomerInfo";
import { userContext } from "../Context/UserContext";
import Dates from "../Helpers/Dates";
import UserInfo from "../Services/User";
import "../Styles/UserProfile.css";

const UserProfile = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    values: {
      address: userInfo.address,
      city: userInfo.city,
      country: userInfo.country,
      birthDate: Dates.formatDateYMD(userInfo.birthDate),
      // securityQuestion: "Who is Robert?",
      // securityQuestionAnswer: "Who wants to",
    },
  });
console.log( Dates.formatDateYMD(userInfo.birthDate),)
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await UserInfo.getUserInfo();
        setUserInfo(res.data);
      } catch (error) {
        console.error(error.response.data);
        // localStorage.clear();
        // navigate("/");
      }
    };
    getUserInfo();
  }, []);

  return (
    <section className="profile">
      <DashboardCard className="profile-basic-info-card">
        <div className="profile-basic-info">
          <Avatar />
          <h2>{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
          <p>{userInfo.email}</p>
          <p>{userInfo.phone}</p>
          <p>Member since: {new Date(userInfo.creationTime).toLocaleDateString()}</p>
        </div>
      </DashboardCard>
      <DashboardCard className="profile-costumer-info-card">
        <CustomerInfo register={register} errors={errors} userInfo={userInfo} setFocus={setFocus} />
      </DashboardCard>
    </section>
  );
};

export default UserProfile;
