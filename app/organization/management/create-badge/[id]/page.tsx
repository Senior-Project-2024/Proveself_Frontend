'use client'
import Navbar from '@/components/Navbars/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { badgeTemplateType } from '@/lib/type/useForm';
import { badgeTemplateSchema } from '@/lib/ScemaYup';
import { yupResolver } from '@hookform/resolvers/yup';
import Plus from '@/components/SVG/Plus';
import Link from 'next/link';
import { API_createBadge, API_getBadgeById, API_updateBadge } from '@/lib/API';
import { useToast } from "@chakra-ui/react";

const mockResponse = {
  badgeName: "Badge",
  description : "ABC descript",
  criteria : "1231221421",
  dayExpired :0,
  monthExpired : 0,
  yearExpired : 4,
  skills : [ "C", "Javascript", "Typescript", "MongoABCD" , "Xyzwe", "Genenative", "AIcontest" , "Blockchain", "3D-model", "Smartcontact", "GuildlineX"]
}


export default function EditBadgeTemplete({ params } : Readonly<{ params : { id : string }}>) {
  const toast = useToast();
  const [skillState, setSkillState] = useState<string[]>([])
  const [inputSkill, setInputSkill] = useState<string>("")
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<badgeTemplateType>({
    defaultValues : {
      // badgeName: "Badge",
      // description : "adada",
      // criteria : "adadadada",
      dayExpired : 0,
      monthExpired : 0,
      yearExpired : 0
    },
    resolver : yupResolver(badgeTemplateSchema)
  });
  const toastIdRef = useRef<any>(null)
  const [file, setFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<any>();
  const [base64, setBase64] = useState<any>();
  
  useEffect(()=>{
    API_getBadgeById(params.id).then((res : any)=>{
      const data = res.data;
      setValue("badgeName", data.name)
      setValue("description", data.descriptionCourse)
      setValue("criteria", data.earningCriteria)
      setValue("linkCourse", data.linkCourse ?? "")
      setValue("dayExpired", data.expiration.day)
      setValue("monthExpired", data.expiration.month)
      setValue("yearExpired", data.expiration.year)
      setSkillState(data.skill)
      setImageInfo(data.imageInfo)
    }).catch((err)=>{
      console.log(err.response.data)
    })
  },[])

  const onSubmit: SubmitHandler<badgeTemplateType> = async (data) => {
    toastIdRef.current = toast({
      title: 'Saving badge...',
      description: "Loading",
      status: 'loading',
      duration: 9000,
      isClosable: true,
    })
    try{
      // need API update badge
      const res = await API_updateBadge(data, file , skillState, params.id);
      toast.update(toastIdRef.current,{
        title: 'Save badge successful',
        description: "We've save badge successful.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }catch(error){
      console.log(error)
      toast.update(toastIdRef.current,{
        title: 'Save badge failed.',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.log(error.response)
    }
  }
  
  const deleteSkill = (skillDelete : string) =>{
    const newSkill = skillState?.filter((currentSkill)=>{
      return currentSkill !== skillDelete
    })
    console.log(newSkill)
    setSkillState([...newSkill])
  }
  const addSkill = (skillAdded : string) =>{
    let isDuplicate: boolean = false; 
    skillState?.forEach((currentSkill)=>{
      if(currentSkill === skillAdded){
        isDuplicate = true;
      }
    })

    // if not duplicate can add skill
    if(!isDuplicate){
      setSkillState([...skillState, skillAdded])
    }
    // reset input skill
    setInputSkill("");
  }
  const toBase64 = (file : any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  

  return (
    <>
      <Navbar isUser={false}/>
      <div className="mt-[90px] flex flex-col items-center pt-[69px]">
        <p className="mb-[51px] text-[48px] font-medium">Badge Template</p>
        <form className="flex flex-col px-[84px] py-[40px] gap-[40px] shadow-thin rounded-[12px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-between gap-[67px]">
            {/* Badge Name */}
            <div className="flex flex-col gap-[12px] relative">
              <p className="light24">Badge Name<span className="text-red">*</span></p>
              <input 
                type="text" 
                className={`w-[575px] rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.badgeName?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}
                placeholder="Badge name"
                autoFocus
                {...register("badgeName")}
              />
              {/* Absolute Error */}
              <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.badgeName?.message }</p>
            </div>
            {/* Expiration period */}
            <div className="flex flex-col gap-[12px]">
              <p className="light24">Expiration period<span className="text-red">*</span> <span className='light18'>(Year and Month and Day is 0 mean not expired)</span></p>
              <div className="flex flex-row gap-[31px]">
                {/* Year */}
                <div className="flex items-center gap-3 relative">
                  <input 
                    type="number" 
                    className={`w-[104px] rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.yearExpired?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}

                    {...register("yearExpired")}
                  />
                  <p className="light24">Year</p>
                  {/* Absolute Error */}
                  <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.yearExpired?.type == "typeError" ? "Expire Year is required" : errors?.yearExpired?.message }</p>
                </div>
                {/* Month */}
                <div className="flex items-center gap-3 relative">
                  <input 
                    type="number" 
                    className={`w-[104px] rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.monthExpired?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}
                    placeholder="0-11"
                    {...register("monthExpired")}
                  />
                  <p className="light24">Month</p>
                  {/* Absolute Error */}
                  <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.monthExpired?.type == "typeError" ? "Expire month is required" : errors?.monthExpired?.message }</p>
                  {/* --------------- */}
                </div>
                {/* Day */}
                <div className="flex items-center gap-3 relative">
                  <input 
                    type="number" 
                    className={`w-[104px] rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.dayExpired?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}
                    {...register("dayExpired")}
                  />
                  <p className="light24">Day</p>
                  {/* Absolute Error */}
                  <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.dayExpired?.type == "typeError" ? "Expire day is required" : errors?.dayExpired?.message }</p>
                  {/* --------------- */}
                </div>
              </div>
            </div>
          </div>
          {/* Badge Image */}
          <div className="flex flex-col gap-[12px]">
            <p className="light24">Badge Image<span className="text-red">*</span></p>
            <div className="border-dashed border rounded-[6px] border-brand-700 py-[32px] w-full bg-brand-50
              flex flex-col items-center justify-center relative cursor-pointer"
            >
              {/* Input hidden */}
              <input type="file" className="absolute z-10 w-full h-full opacity-0 cursor-pointer" 
                accept="image/*"
                onChange={ async (e)=> { 
                  setFile(e.target.files ? e.target.files[0] : null);
                  if(e.target.files?.length !== 0){ // No files
                    setBase64(await toBase64(e.target.files && e.target.files[0]))
                  }
                }} 
              />
              {
                file?.name ?
                <img src={base64} alt="" className="h-[216px]" />
                :
                <img src={imageInfo?.imageURL} alt="" className="h-[216px]" />
                // <div className="p-[18px] rounded-full bg-[#DCDCE4]">
                //   <img src="/upload.svg" alt="" />
                // </div>
              }
              {
                file?.name ? 
                <p className="light18 text-gray-200 mt-[11px] mb-[11px]">{file?.name}</p>
                :
                <p className="light18 text-gray-200 mt-[11px] mb-[11px]">{imageInfo?.originalFilename}</p>
                // <p className="regular18 text-red mt-[11px] mb-[11px]">No File chosen </p>
              }
              <div className="flex gap-[8px] mb-[8px]">
                <p className="underline regular20">Click to upload</p>
                <p className='light20 text-gray-200'> or drag and drop ()</p>
              </div>
              <div className="flex gap-[8px]">
                <p className="light18 text-gray-200">File scale choose be </p>
                <p className='regular18 '>1 : 1</p>
              </div>
              {/* <p className=" light16 text-red">{errors?.file?.message }</p> */}
            </div>
          </div>
          {/* Description  course */}
          <div className="flex flex-col gap-[12px] relative">
            <p className="light24">Description course<span className="text-red">*</span></p>
            <textarea rows={6} 
              className={`w-full rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.description?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}
              {...register("description")}
              placeholder="Description"
            >
            </textarea>
            {/* Absolute Error */}
            <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.description?.message }</p>
            {/* --------------- */}
          </div>
          {/* Link to course */}
          <div className="flex flex-col gap-[12px] relative">
            <p className="light24">Link to course</p>
            <input 
              type="text" 
              className={`w-[575px] rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.linkCourse?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}
              placeholder="linkCourse"
              {...register("linkCourse")}
            />
            {/* Absolute Error */}
            <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.linkCourse?.message }</p>
            {/* --------------- */}
          </div>
          {/* Earning Criteria */}
          <div className="flex flex-col gap-[12px] relative">
            <p className="light24">Earning Criteria<span className="text-red">*</span></p>
            <textarea rows={6} 
              className={`w-full rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.criteria?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}
              {...register("criteria")}
              placeholder="Earning Criteria"
            >
            </textarea>
            {/* Absolute Error */}
            <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.criteria?.message }</p>
            {/* --------------- */}
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="light24">Skills</p>
            <div className="flex flex-wrap w-[1209px] gap-[10px] transition-all ease-in-out duration-500">
              {
                skillState?.map((skill)=>{
                  return <div key={skill}>
                    <div className="flex gap-[10px] py-[3px] px-[12px] border border-brand-600 rounded-[4px] regular18 text-brand-600">
                      {skill}
                      <button type="button" onClick={()=> deleteSkill(skill)}>
                        <img src="/close_button.svg" alt="" className='w-[12px] h-[12px]'/>
                      </button>
                    </div>
                  </div> 
                })
              }
            </div>
            <div className="flex gap-[12px] items-center">
              <input 
                type="text" 
                className={`w-[575px] rounded-[4px] py-[12px] px-[24px] light20 outline input-bade-cer`}
                placeholder="xxxxxx"
                value={inputSkill}
                onChange={(e)=>{setInputSkill(e.target.value)}}
              />
              <button type='button' className="flex bg-[#11A504] py-[3px] px-[7px] items-center rounded-[4px] disabled:bg-[#acacac] transition-all ease-in-out duration-500" 
                onClick={()=>addSkill(inputSkill)}
                disabled={inputSkill.length === 0} 
              >
                <Plus classNames='w-[20px] h-[20px]' />
                <p className="medium18 text-white">Add</p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-[20px]">
            <button className="py-[14px] px-[20px] bg-brand-700 text-white medium20 rounded-[8px] 
              transition ease-in-out duration-300
              hover:bg-brand-800
              disabled:bg-gray-100 disabled:scale-100
              " 
              disabled={ !watch().badgeName || !watch().criteria || watch().dayExpired < 0 || watch().monthExpired < 0 || watch().yearExpired < 0 || !watch().description }
              type="submit"
            >
                Save
            </button>
            <Link href={"/organization/management"}>
              <button className="py-[14px] px-[20px] medium20 border border-gray-200 rounded-[8px] hover:bg-slate-50" 
                type="button" 
                onClick={()=>{}}
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
