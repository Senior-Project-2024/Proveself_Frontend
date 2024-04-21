'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "./Modal"
import { editProfileType, editPasswordType, editProfileOrganizeType } from "@/lib/type/useForm";
import { editPasswordSchema, editProfileOrganizeSchema, editProfileSchema } from "@/lib/ScemaYup";
import InputMask from "react-input-mask";
import { useEffect, useState, useRef } from "react";
import { setCookie, getCookie } from "cookies-next";
import { TgeneralData, TgeneralDataOrganize } from "@/lib/type/generalData";
import { useToast } from "@chakra-ui/react";
import { API_updateProfile, API_updatePassword, API_updateProfileOrganize } from "@/lib/API";
interface IModalSetting{
  setOpenSetting : any
  isUser: boolean
}

export default function ModalSetting({ setOpenSetting, isUser } : Readonly<IModalSetting> ) {
  const toast = useToast()
  const [errorSubmitPassword, setErrorSubmitPassword] = useState();
  const toastIdRef = useRef<any>(null)
  // storage user/organization data of cookie storage
  const [storeDataUser, setStoreDataUser] = useState<any>({});
  const [storeDataOrganize, setStoreDataOrganize] = useState<any>({})
  // -----------------------------------------------------------------------------------//

  // useForm for update "Profile" User
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<editProfileType>({
    defaultValues : {
      firstname : "",
      lastname : "",
      phone : ""
    },
    resolver : yupResolver(editProfileSchema)
  });

  // useForm for update "Profile" Organization
  const { register : registerOrganize, handleSubmit : handleSubmitOrganize, watch : watchOrganize, formState: { errors : errrorsOrganize }, setValue : setValueOrganize} = useForm<editProfileOrganizeType>({
    defaultValues : {
      name : "",
      phone : ""
    },
    resolver : yupResolver(editProfileOrganizeSchema)
  });
  
  // useForm for update "Password" User and Organization
  const { register : registerPassword, handleSubmit : handleSubmitPassword, watch : watchPassword, formState: { errors : errorsPassword }, setValue : setValuePassword} = useForm<editPasswordType>({
    defaultValues : {
      currentpassword : "",
      newpassword : "",
      confirmnewpassword : ""
    },
    resolver : yupResolver(editPasswordSchema)
  });

  const onSubmit: SubmitHandler<editProfileType> = async (data) => {
    toastIdRef.current = toast({
    title: 'Profile updating...',
    description: "Loading",
    status: 'loading',
    duration: 9000,
    isClosable: true,
    })
    try{
      await API_updateProfile(storeDataUser.id, {
        fName : data.firstname,
        lName : data.lastname,
        telNo : data.phone.split("-").join(""),
      });
      setStoreDataUser({...storeDataUser, fName : data.firstname, lName : data.lastname, telNo : data.phone});
      // Notification change loading to success 
      toast.update(toastIdRef.current,{
        title: 'Profile update success',
        description: "We've updated your profile successful.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }catch(error){
      // Notification change loading to failed
      toast.update(toastIdRef.current,{
        title: 'Edit profile failed.',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.log(error.response)
    }
  };

  const onSubmitOrganize: SubmitHandler<editProfileOrganizeType> = async (data) => {
    toastIdRef.current = toast({
    title: 'Profile updating...',
    description: "Loading",
    status: 'loading',
    duration: 9000,
    isClosable: true,
    })
    try{
      await API_updateProfile(storeDataOrganize.id, {
        organizeName : data.name,
        landlineNumber : data.phone,
      });
      setStoreDataOrganize({...storeDataOrganize, organizeName : data.name, landlineNumber : data.phone});
      // Notification change loading to success 
      toast.update(toastIdRef.current,{
        title: 'Profile organization updated.',
        description: "We've updated your profile successful.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }catch(error){
      // Notification change loading to failed
      toast.update(toastIdRef.current,{
        title: 'Edit profile organization failed.',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  
  const onSubmitPassword: SubmitHandler<editPasswordType> = async (data) => {
    toastIdRef.current = toast({
      title: 'Profie updating...',
      description: "Loading",
      status: 'loading',
      duration: 9000,
      isClosable: true,
    })
    try{
      if(isUser){
        await API_updateProfile( storeDataUser.id , {
          password : data.currentpassword,
          newPassword : data.newpassword
        });
      }else{
        await API_updateProfile( storeDataOrganize.id , {
          password : data.currentpassword,
          newPassword : data.newpassword
        });
      }
      toast.update(toastIdRef.current,{
        title: 'Password updated.',
        description: "We've updated your password successful.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setValuePassword("currentpassword", "");
      setValuePassword("newpassword", "");
      setValuePassword("confirmnewpassword", "");
    }catch(error){
      console.log(error.response)
      toast.update(toastIdRef.current,{
        title: 'Edit password failed.',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setErrorSubmitPassword(error.response.data.message)
    }
  }; 
  useEffect(()=>{
    // get cookie from "user-data" and "organization-data"
    // setCookie("data-user", data_user);
    // setCookie("data-organization", data_organization);
    if(isUser){
      const dataUser = JSON.parse(getCookie("data-user") as string);
      setStoreDataUser(dataUser);
      setValue("firstname", dataUser?.fName);
      setValue("lastname", dataUser?.lName);
      setValue("phone", dataUser?.telNo);
    }else{
      const dataOrganization = JSON.parse(getCookie("data-organize") as string);
      setStoreDataOrganize(dataOrganization)
      setValueOrganize("name", dataOrganization?.organizeName);
      setValueOrganize("phone", dataOrganization?.landlineNumber);
    }
  },[])

  return (
    <Modal width='w-[971px]' height='h-[806px]' setStatus={setOpenSetting} typeClose="inside">
      <div className="flex flex-col items-center py-[38px]">
        <p className="medium36">Account Setting</p>
        {/* line */}<div className="w-[898px] h-[3px] bg-[#D9D9D9] rounded-[10px] mt-[25px] mb-[22px]"></div>
        <div className="w-full flex flex-col pl-[51px]">
          <p className="medium24">Profile</p>
          <p className="light18">{isUser ? "Information used to confirm you are the real owner of your credentials" : "This Information used to issue credentials with learner"} {isUser} </p>
          {
            // Form profile
            isUser ? 
            <form className="flex flex-col mt-[14px]" onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <div className="flex gap-[26px] items-center">
                <p className="regular18">Email</p>
                <p className="regular16">{storeDataUser.email}</p>
              </div>
              <div className="flex flex-row gap-[20px] my-[15px]">
                <div className="relative flex gap-[26px] items-center">
                  <p className="regular18">First Name</p>
                  <input 
                    type="text" 
                    className="w-[297px] py-[8px] px-[28px] rounded  regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500" 
                    placeholder="First name"
                    {...register("firstname")}
                  />
                </div>
                <div className="flex gap-[26px] items-center">
                  <p className="regular18">Last Name</p>
                  <input 
                    type="text" 
                    className="w-[297px] py-[8px] px-[28px] rounded  regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500" 
                    placeholder="Last name"
                    {...register("lastname")}
                  />
                </div>
              </div>
              <div className="flex gap-[26px] items-center">
                <p className="regular18">Phone Number</p>
                <InputMask
                  mask="999-999-9999" 
                  maskChar=""
                  defaultValue={watch().phone}
                  type="text" 
                  className={`w-[221px] py-[8px] px-[28px] rounded regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500 ${ errors.phone?.type && "focus:outline-red outline-red" } `}
                  placeholder="092-235-6623"
                  {...register("phone")}
                />
              </div>
              <p className="text-red light18 my-[10px]">{errors.phone?.message}</p>
              <button type="submit" 
                disabled={ (watch().firstname == storeDataUser?.fName) && (watch().lastname == storeDataUser?.lName) && (watch().phone.split("-").join("") == storeDataUser?.telNo)}
                className="w-fit bg-blue-300 rounded-[50px] px-[19px] py-[10px] medium18 text-white
                  transition hover:bg-blue-400 hover:scale-105 hover:ease-in-out hover:duration-300
                disabled:bg-gray-100 disabled:scale-100"
              >
                Update Profile
              </button>
            </form>
            :
            <form className="flex flex-col mt-[14px]" onSubmit={handleSubmitOrganize(onSubmitOrganize)}>
              {/* email */}
              <div className="flex gap-[26px] items-center">
                <p className="regular18">Email</p>
                <p className="regular16">{storeDataOrganize.email}</p>
              </div>
              <div className="flex flex-row gap-[20px] my-[15px]">
                <div className="relative flex gap-[26px] items-center">
                  <p className="regular18">Organization Name</p>
                  <input 
                    type="text" 
                    className="w-[297px] py-[8px] px-[28px] rounded  regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500" 
                    placeholder="Organization name"
                    {...registerOrganize("name")}
                  />
                </div>
              </div>
              <div className="flex gap-[26px] items-center">
                <p className="regular18">Organization Phone Number</p>
                <input
                  type="text" 
                  className={`w-[221px] py-[8px] px-[28px] rounded regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500 ${ errrorsOrganize.phone?.type && "focus:outline-red outline-red" } `}
                  {...registerOrganize("phone")}
                />
              </div>
              <p className="text-red light18 my-[10px]">{errrorsOrganize.phone?.message}</p>
              <button type="submit" 
                disabled={ (watchOrganize().name == storeDataOrganize?.organizeName) && (watchOrganize().phone == storeDataOrganize?.landlineNumber)}
                className="w-fit bg-blue-300 rounded-[50px] px-[19px] py-[10px] medium18 text-white
                  transition hover:bg-blue-400 hover:scale-105 hover:ease-in-out hover:duration-300
                disabled:bg-gray-100 disabled:scale-100"
              >
                Update Profile
              </button>
            </form>
          }
        </div>
        {/* line */}<div className="w-[872px] h-[2px] bg-[#D9D9D9] rounded-[10px] mt-[23px] mb-[13px]"></div>
        {/* Form password */}
        <form className="w-full flex flex-col pl-[51px]" onSubmit={handleSubmitPassword(onSubmitPassword)}>
          <p className={`medium24 ${ !errorSubmitPassword && "mt-[15px]"}`}>Reset Password</p>
          <div className="flex flex-col mt-[14px] gap-[15px]">
            <div className="flex gap-[68px] items-center">
              <p className="regular18">Current Password</p>
              <input
                type="password" 
                className={`w-[297px] py-[8px] px-[28px] rounded  regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500 `}
                placeholder="**********"
                {...registerPassword("currentpassword")}
              />
            </div>
            <div className="flex items-center">
              <p className="regular18">New Password</p>
              <input
                type="password" 
                className={`ml-[96px] w-[297px] py-[8px] px-[28px] rounded  regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500 ${errorsPassword?.newpassword?.type && "input-fail"}`} 
                placeholder="**********"
                {...registerPassword("newpassword")}
              />
              <p className="ml-[21px] text-red light18">{errorsPassword.newpassword?.message}</p>
            </div>
            <div className="flex items-center">
              <p className="regular18">Confirm New Password</p>
              <input
                type="password" 
                className={`ml-[26px] w-[297px] py-[8px] px-[28px] rounded  regular16 outline outline-1 focus:bg-primary-100 focus:outline-primary-500 ${errorsPassword?.confirmnewpassword?.type && "input-fail"} `} 
                placeholder="**********"
                {...registerPassword("confirmnewpassword")}
              />
              <p className="ml-[21px] text-red light18">{errorsPassword.confirmnewpassword?.message}</p>
            </div>
          </div>
          <p className="text-red light18 mt-[10px] mb-[15px]">{errorSubmitPassword}</p>
          <button type="submit" 
            disabled={ !watchPassword().currentpassword || !watchPassword().newpassword || !watchPassword().confirmnewpassword}
            className="w-fit bg-blue-300 rounded-[50px] px-[19px] py-[10px] medium18 text-white
              transition hover:bg-blue-400 hover:scale-105 hover:ease-in-out hover:duration-300
            disabled:bg-gray-100 disabled:scale-100"
          >
            Update Password
          </button>
        </form>
      </div>
      {/* Close button */}
      <button onClick={()=> setOpenSetting(false)}>
        <img src="/close_button.svg" alt="" className="absolute z-50 w-[24px] h-[24px] top-[34px] right-[34px] stroke-red text-red stroke-4" />
      </button>
      {/*  */}
    </Modal>
  )
}
