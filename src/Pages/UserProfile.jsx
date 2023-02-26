import { Avatar } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DashboardCard from '../Components/DashboardCard';
import CostumerInfo from '../Components/Profile/CostumerInfo';
import { userContext } from "../Context/UserContext";
import UserInfo from '../Services/User';


const UserProfile = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      address: userInfo.address,
      city: userInfo.city,
      country: userInfo?.country,
      birthDate: userInfo?.birthDate,
      // securityQuestion: "Who is Robert?",
      // securityQuestionAnswer: "Who wants to",
    },
  });
  console.log(userInfo)
  useEffect(() => {
      const getUserInfo = async () => {
        try {
          const res = await UserInfo.getUserInfo();
          setUserInfo(res.data);
          console.log("data fetched")
        } catch (error) {
          console.error(error.response.data);
          // localStorage.clear();
          // navigate("/");
        }
      };
      getUserInfo();
  }, []);

  return (
    <section>
      <DashboardCard>
        <Avatar />
        <h2>{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
        <p>{userInfo.email}</p>
        <p>{userInfo.phone}</p>
        <p>Member since: {userInfo.creationTime}</p>
      </DashboardCard>
      <DashboardCard>
        <CostumerInfo register={register} errors={errors} />
      </DashboardCard>
    </section>
  )
}

export default UserProfile