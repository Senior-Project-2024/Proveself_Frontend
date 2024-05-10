'use client'
import React, { useEffect, useState } from 'react'
import ModalConfirmDelete from '../Modal/ModalConfirmDelete'
import { useRouter } from 'next/navigation'
import HintCopyID from '../Hint/HintCopyID'
import Check from '../SVG/Check'
import Copy from '../SVG/Copy'

interface IBadgeItem {
  certificate : any
  deleteCertificate : any
}

export default function CertificateItem({certificate, deleteCertificate } : Readonly<IBadgeItem>) {
  const router = useRouter()
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(()=>{
    console.log(certificate)
  },[])

  useEffect(()=>{
    console.log("isOpenConfirmDelete : " + isOpenConfirmDelete)
  },[isOpenConfirmDelete])

  useEffect(()=>{
    if(isCopied){
      setTimeout(()=>{
        setIsCopied(false)
      },2000)
    }
  },[isCopied])

  return (
    <>
    <div className="flex flex-row py-[24px] light24 self-start justify-start items-center">
      <div className="ml-[23px] flex flex-col items-center gap-1 ">
        <img src={certificate.imageInfo.imageURL} alt="certificate" className="w-[184px] " />
        <p className="regular14 w-[184px] truncate ">ID : {certificate._id}</p>
      </div>
      <p className="ml-[51px] w-[220px] text-center">{certificate.name}</p>
      <div className="flex flex-wrap w-[404px] ml-[51px] gap-[2px]">
        {
          certificate?.fullBadgeRequire?.map((badge : any , i : number) => {
            return <div key={badge.id} className="py-[3px] px-[12px] border border-[#292929] rounded-[4px] text-blue-300 medium18">{badge.name}</div>
          })
        }
      </div>
      <p className="ml-[51px] w-[404px] left-[90px] line-clamp-3">{certificate?.earningCriteria}</p>
      {
        certificate.expiration.year === 0 && certificate.expiration.month  === 0 && certificate.expiration.day  === 0 ?
        <div className="ml-[26px] w-[128px] text-center">
          none
        </div>  
        :
        <div className="ml-[26px] w-[128px] text-center">
          { certificate.expiration.year > 0 && certificate.expiration.year + " year" }
          <p className="block">{ certificate.expiration.month > 0 && certificate.expiration.month + " month" }</p> 
          <p className="block">{ certificate.expiration.day > 0 && certificate.expiration.day + " day" }</p> 
        </div>
      }
      <button className="ml-[24px]" onClick={()=> {
        navigator.clipboard.writeText(certificate._id)
        setIsCopied(true);
      }}>
        {
          isCopied ? 
          <HintCopyID type={"certificate"}>
            <Check stroke="#292929"/>
          </HintCopyID>
          :
          <HintCopyID type={"certificate"}>
            <Copy className={`stroke-black group-hover:stroke-brand-600`}/>
          </HintCopyID>
        }
      </button>
      <button onClick={()=>{ router.push("/organization/management/create-certificate/" + certificate._id)}}>
        <img src="/edit.svg" alt="edit" className="ml-[17px]" />
      </button>
      <button  onClick={ ()=>{ setIsOpenConfirmDelete(true) }}>
        <img src="/trash.svg" alt="trash" className='ml-[17px]' />
      </button>
    </div>
    <div className="w-[1660px] h-[1px] bg-[#D0D0D0]"></div>
    {
      isOpenConfirmDelete && 
      <ModalConfirmDelete 
        topic={"Delete Certificate template?"}
        describe={"Are you sure you want to delete Certificate template?"}
        setStateOpen={setIsOpenConfirmDelete} 
        yesFunction={deleteCertificate}
        id={certificate._id}
      />
    }
    </>
  )
}
