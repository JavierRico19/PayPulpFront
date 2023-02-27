import { Avatar } from "@mui/material";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import DashboardCard from "../Components/DashboardCard";
import CostumerInfo from "../Components/Profile/CostumerInfo";
import { userContext } from "../Context/UserContext";
import UserInfo from "../Services/User";
import "../Styles/UserProfile.css";

const UserProfile = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    values: {
      address: userInfo.address,
      city: userInfo.city,
      country: userInfo?.country,
      birthDate: userInfo?.birthDate,
      // securityQuestion: "Who is Robert?",
      // securityQuestionAnswer: "Who wants to",
    },
  });

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
        <CostumerInfo register={register} errors={errors} userInfo={userInfo} />
      </DashboardCard>
    </section>
  );
};

export default UserProfile;
