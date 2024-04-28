'use client'
import Navbar from '@/components/Navbars/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { certificateTemplateType } from '@/lib/type/useForm';
import { certificateTemplateSchema } from '@/lib/ScemaYup';
import { yupResolver } from '@hookform/resolvers/yup';
import Plus from '@/components/SVG/Plus';
import Link from 'next/link';
import { API_createCertificate, API_getAllBadgeOfOrganize, API_getCertificateById, API_updateCertificate } from '@/lib/API';
import { useToast } from "@chakra-ui/react";
import { mockTempleteBadge, mockTempleteCertificate } from '@/lib/data/mockBadgeCer';
import getCookieFunction from '@/helper/getCookieFunction';

const IdBadgeRequired = ["65aea02ae74db679fd86bd14", "65aea02ae74db679fd86bd123"]
const mockResponse = {
  certificateName: "Certificate",
  description : "ABC descript",
  criteria : "1231221421",
  dayExpired :0,
  monthExpired : 0,
  yearExpired : 4,
  skills : [ "C", "Javascript", "Typescript", "MongoABCD" , "Xyzwe", "Genenative", "AIcontest" , "Blockchain", "3D-model", "Smartcontact", "GuildlineX"]
}

export default function EditCertificateTemplete({ params } : Readonly<{ params : { id : string }}>) {
  const toast = useToast()
  const [skillState, setSkillState] = useState<string[]>([])
  const [badgeRequired, setBadgeRequired] = useState<any>(); 
  const [badgeListSelect, setBadgeListSelect] = useState<any>();
  const [openBadgeList, setOpenBadgeList] = useState<boolean>(false)
  const [inputSkill, setInputSkill] = useState<string>("")
  const [inputSearch, setInputSearch] = useState<string>("")
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<certificateTemplateType>({
    defaultValues : {
      // certificateName : "Certifiacte",
      // description : "adada",
      // criteria : "adadadada",
      dayExpired :0,
      monthExpired : 0,
      yearExpired : 0
    },
    resolver : yupResolver(certificateTemplateSchema)
  });
  const toastIdRef = useRef<any>(null)
  const inputSearchRef = useRef<any>(null)
  const [file, setFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<any>();
  const [base64, setBase64] = useState<any>();
  
  useEffect(()=>{
    const tempBadgeRequired : any = [];
    const tempBadgeListSelect : any = [];
    API_getAllBadgeOfOrganize(getCookieFunction("data-organize").id)
    .then((resAllBadge)=>{
      console.log(resAllBadge.data)
      API_getCertificateById(params.id)
      .then((resCertificate)=>{
        // Loop for set current badgeRequired and badgeListSelect
        resAllBadge.data.forEach((badge : any) => {
          let foundBadgeRequired = false;
          const length = resCertificate.data.badgeRequired.length;
          let i = 0;
          console.log(length);
          while((i < length) && !foundBadgeRequired){
            if(badge.id === resCertificate.data.badgeRequired[i]){
              foundBadgeRequired = true;
            }
            i++;
          }
          if(foundBadgeRequired){
            tempBadgeRequired.push(badge);
          }else{
            tempBadgeListSelect.push(badge);
          }
        })
        setBadgeRequired(tempBadgeRequired)
        setBadgeListSelect(tempBadgeListSelect)
        // set current data
        setValue("certificateName", resCertificate.data.name)
        setValue("description", resCertificate.data.descriptionCourse)
        setValue("criteria", resCertificate.data.earningCriteria)
        setValue("dayExpired", resCertificate.data.expiration.day)
        setValue("monthExpired", resCertificate.data.expiration.month)
        setValue("yearExpired", resCertificate.data.expiration.year)
        setSkillState(resCertificate.data.skills ?? [])
        setImageInfo(resCertificate.data.imageInfo)
      }).catch((err)=>{
        console.log(err.response.data.message)
      })
    }).catch((err)=>{
      console.log(err.response.data.message)
    })

  },[])

  const onSubmit: SubmitHandler<certificateTemplateType> = async (data) => {
    toastIdRef.current = toast({
      title: 'Saving certificate...',
      description: "Loading",
      status: 'loading',
      duration: 9000,
      isClosable: true,
    })
    try{
      const res = await API_updateCertificate(data, file, skillState, badgeRequired, params.id);
      toast.update(toastIdRef.current,{
        title: 'Save certificate successful',
        description: "We've save certificate successful.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }catch(error){
      console.log(error)
      toast.update(toastIdRef.current,{
        title: 'Save certificate failed.',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.log(error.response)
    }
  }
  
  const deleteSkill = (skillDelete : string) =>{
    const newSkill = skillState.filter((currentSkill)=>{
      return currentSkill !== skillDelete
    })
    setSkillState([...newSkill])
  }
  const addSkill = (skillAdded : string) =>{
    let isDuplicate: boolean = false; 
    skillState.forEach((currentSkill)=>{
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
  const addBadgeRequired = ( badgeAdd : any) =>{
    setBadgeRequired([...badgeRequired, badgeAdd])
  }
  const deleteBadgeRequired = ( IdBadgeDelete : any) =>{
    const newBadgeRequired = badgeRequired?.filter((currentBadge : any)=>{
      return currentBadge.id !== IdBadgeDelete
    })
    setBadgeRequired(newBadgeRequired)
  }
  const addBadgeListSelect = ( badgeAdd : any) =>{
    setBadgeListSelect([...badgeListSelect, badgeAdd])
  }
  const deleteBadgeListSelect = ( IdBadgeDelete : any) =>{
    const newBadgeListSelect = badgeListSelect?.filter((currentBadge : any)=>{
      return currentBadge.id !== IdBadgeDelete
    })
    setBadgeListSelect(newBadgeListSelect)
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
        <p className="mb-[51px] text-[48px] font-medium">Certificate Template</p>
        <form className="flex flex-col px-[84px] py-[40px] gap-[40px] shadow-thin rounded-[12px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-between gap-[67px]">
            {/* Badge Name */}
            <div className="flex flex-col gap-[12px] relative">
              <p className="light24">Certificate Name<span className="text-red">*</span></p>
              <input 
                type="text" 
                className={`w-[575px] rounded-[4px] py-[12px] px-[24px] light20 outline ${errors?.certificateName?.type ? "input-bade-cer-fail" : "input-bade-cer"}`}
                placeholder="Certificate name"
                autoFocus
                {...register("certificateName")}
              />
              {/* Absolute Error */}
              <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.certificateName?.message }</p>
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
          <div className="flex flex-col gap-[12px] relative">
            <p className="light24">Certificate Image<span className="text-red">*</span></p>
            <div className="border-dashed border rounded-[6px] border-brand-700 py-[32px] w-full bg-brand-50
              flex flex-col items-center justify-center relative cursor-pointer"
            >
              {/* Input hidden */}
              <input type="file" className="absolute z-10 w-full h-full opacity-0 cursor-pointer" 
                accept="image/*"
                onChange={ async (e)=> { 
                  setFile(e.target.files ? e.target.files[0] : null);
                  console.log(e.target.files?.length == 0)
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
              }
              {/* <img src={base64} alt="" className="w-[300px] h-[300px]" /> */}
              {
                file?.name ? 
                <p className="light18 text-gray-200 mt-[11px] mb-[11px]">{file?.name}</p>
                :
                <p className="light18 text-gray-200 mt-[11px] mb-[11px]">{imageInfo?.originalFilename}</p>
              }
              <div className="flex gap-[8px] mb-[8px]">
                <p className="underline regular20">Click to upload</p>
                <p className='light20 text-gray-200'> or drag and drop</p>
              </div>
              <div className="flex gap-[8px]">
                <p className="light18 text-gray-200">File scale choose be </p>
                <p className='regular18 '>1.5 : 1</p>
              </div>
              {/* <p className=" light16 text-red">{errors?.file?.message }</p> */}
            </div>
          </div>
          {/* Badge Required */}
          <div className="flex flex-col gap-[12px] relative">
            <p className="light24">Badge Required <span className="light18">(must be more than 1 badge)</span> <span className="text-red">*</span></p>
            {/* list badge required */}
            <div className="flex flex-wrap w-[1209px] gap-[10px] transition-all ease-in-out duration-500">
              {
                badgeRequired?.map((badge : any)=>{
                  return <div key={badge.id}>
                    <div className="flex gap-[10px] py-[3px] px-[12px] border border-brand-600 rounded-[4px] regular18 text-brand-600">
                      {badge.name}
                      <button type="button" onClick={()=> {
                        addBadgeListSelect(badge)
                        deleteBadgeRequired(badge.id)
                      }}>
                        <img src="/close_button.svg" alt="" className='w-[12px] h-[12px]'/>
                      </button>
                    </div>
                  </div> 
                })
              }
            </div>
            {/* search badge */}
            <div className="relative">
              <input 
                ref={inputSearchRef}
                type="text" 
                className={`w-[575px] rounded-[4px] py-[12px] pl-[70px] pr-[70px] light20 outline input-bade-cer`}
                placeholder="Search badge"
                value={inputSearch}
                onChange={(e)=>{setInputSearch(e.target.value)}}
                onFocus={()=>setOpenBadgeList(true)}
              />
              <img src="/search.svg" alt="search" className="w-[30px] absolute left-[20px] top-[12px]" />
              {
                  openBadgeList ? 
                  <button type="button" className="cursor-pointer" onClick={()=>setOpenBadgeList(false)}>
                    <img src="/arrow-down.svg" className="transition w-[30px] h-[30px] absolute left-[521px] top-[12px]" alt="arrow-down" />
                  </button>
                  :
                  <button type="button" className="cursor-pointer" onClick={()=>setOpenBadgeList(true)}>
                    <img src="/arrow-down.svg" className="transition w-[30px] h-[30px] -rotate-180 absolute left-[521px] top-[12px]" alt="arrow-down" />
                  </button>
                }
              {/* list for adding badge required */}
              <div className={`w-[575px] h-[455px] bg-white rounded-[4px]
                absolute top-[70px] left-0 z-10
                overflow-scroll overflow-x-hidden shadow-thin ${!openBadgeList && "hidden"}`}
              >
                {
                  badgeListSelect?.map((badge : any)=>{
                    let matcher = new RegExp(inputSearch.toLowerCase());
                    return(
                      <div className={`flex flex-col items-center ${ matcher.test(badge.name.toLowerCase()) ? "" : "hidden"}`} key={badge.id}>
                        <div className="w-full flex flex-row justify-between items-center px-[32px] py-[8px]">
                          <img src="/badge_crop.png" alt="" className="h-[70px]" />
                          <div className="flex flex-col">                          
                            <p className="w-[287px] light20">{badge.name}</p>
                            <p className="w-[287px] light14 text-gray-100 truncate">{badge.descriptionCourse}</p>
                          </div>
                          <button type="button" className='flex flex-row items-center bg-brand-600 gap-[3px] py-[3px] px-[12px]  rounded-[4px] hover:bg-brand-700'
                            onClick={()=>{
                              addBadgeRequired(badge)
                              deleteBadgeListSelect(badge.id)
                            }}
                          >
                            <img src="/plus.svg" alt="" className="w-[20px] h-[20px]" />
                            <p className='medium18 text-white'>Add</p>
                          </button>
                        </div>
                        <div className="bg-[#D0D0D0] w-[537px] h-[1px] rounded-lg"></div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            {/* Absolute Error */}
            {/* <p className="absolute left-0 bottom-[-30px] light16 text-red">{errors?.badgeName?.message }</p> */}
          </div>
          {/* Description Certificate */}
          <div className="flex flex-col gap-[12px] relative">
            <p className="light24">Description Certificate<span className="text-red">*</span></p>
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
                skillState.map((skill)=>{
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
                <Plus classNames='w-[20px] h-[20px] ' />
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
              disabled={ !watch().certificateName || !watch().criteria || watch().dayExpired < 0 || watch().monthExpired < 0 || watch().yearExpired < 0 
                || !watch().description || badgeRequired?.length < 2
              }
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
