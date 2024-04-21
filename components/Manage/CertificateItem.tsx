import React, { useState } from 'react'
import ModalConfirmDelete from '../Modal/ModalConfirmDelete'
import { useRouter } from 'next/navigation'

interface IBadgeItem {
  certificate : any
  deleteCertificate : any
}

export default function CertificateItem({certificate, deleteCertificate } : Readonly<IBadgeItem>) {
  const router = useRouter()
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState<boolean>(false);
  return (
    <>
    <div className="flex flex-row py-[24px] light24 self-start justify-start items-center">
      <img src="/certificate.png" alt="certificate" className="w-[184px] ml-[23px]" />
      <p className="ml-[51px] w-[220px] text-center">{certificate.name}</p>
      <div className="flex flex-wrap w-[404px] ml-[51px] gap-[2px]">
        <div className="py-[3px] px-[12px] border border-[#292929] rounded-[4px] text-blue-300 medium18">Complete React native </div>
        <div className="py-[3px] px-[12px] border border-[#292929] rounded-[4px] text-blue-300 medium18">React native </div>
        <div className="py-[3px] px-[12px] border border-[#292929] rounded-[4px] text-blue-300 medium18">ABC</div>
      </div>
      <p className="ml-[51px] w-[404px] left-[90px] line-clamp-3">{certificate.criteria}</p>
      <div className="ml-[26px] w-[128px] text-center">{ certificate.periodExpireYear > 0 && certificate.periodExpireYear + " year" }
        <p className="block">{ certificate.periodExpireMonth > 0 && certificate.periodExpireMonth + " month" }</p> 
        <p className="block">{ certificate.periodExpireDay > 0 && certificate.periodExpireDay + " day" }</p> 
      </div>
      <button onClick={()=>{ router.push("/organization/management/create-certificate/" + certificate.id)}}>
        <img src="/edit.svg" alt="edit" className="ml-[63px]" />
      </button>
      <button  onClick={ ()=>{ setIsOpenConfirmDelete(true) }}>
        <img src="/trash.svg" alt="trash" className='ml-[17px]' />
      </button>
    </div>
    <div className="w-[1660px] h-[1px] bg-[#D0D0D0]"></div>
    {
      isOpenConfirmDelete && 
      <ModalConfirmDelete 
        topic={"Are you sure you want to delete Certificate template?"}
        describe={""}
        setStateOpen={setIsOpenConfirmDelete} 
        yesFunction={ ()=>deleteCertificate(certificate.id) }
      />
    }
    </>
  )
}
