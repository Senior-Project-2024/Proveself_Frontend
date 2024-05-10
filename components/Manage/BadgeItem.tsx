'use client'
import React, { useState, useEffect } from 'react'
import ModalConfirmDelete from '../Modal/ModalConfirmDelete'
import { useRouter } from 'next/navigation'
import Copy from '../SVG/Copy'
import Check from '../SVG/Check'
import HintCopyID from '../Hint/HintCopyID'

interface IBadgeItem {
  badge : any
  deleteBadge : any
}

export default function BadgeItem({badge, deleteBadge } : Readonly<IBadgeItem>) {
  const router = useRouter(); 
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(()=>{
    if(isCopied){
      setTimeout(()=>{
        setIsCopied(false)
      },2000)
    }
  },[isCopied])

  return (
    <>
      <div className="flex flex-row py-[10px] light24 self-start justify-start items-center">
        <div className="ml-[52px] flex flex-col items-center gap-1 w-[100px]">
          {/* <img src={"/badge_crop.png"} alt="badge" className="w-[88px] " /> */}
          <img src={badge.imageInfo.imageURL} alt="badge" className="w-[95px] h-[95px] " />
          <p className="regular14 w-[100px] truncate ">ID : {badge.id}</p>
        </div>
        <p className="ml-[62px] w-[212px] text-center">{badge.name}</p>
        <p className="ml-[84px] w-[380px] left-[90px] line-clamp-3">{badge.descriptionCourse}</p>
        <p className="ml-[46px] w-[380px] left-[90px] line-clamp-3">{badge.earningCriteria}</p>
        {
          badge.expiration.year === 0 && badge.expiration.month  === 0 && badge.expiration.day  === 0 ?
          <div className="ml-[26px] w-[128px] text-center">
            none
          </div>  
          :
          <div className="ml-[26px] w-[128px] text-center">
            { badge.expiration.year > 0 && badge.expiration.year + " year" }
            <p className="block">{ badge.expiration.month > 0 && badge.expiration.month + " month" }</p> 
            <p className="block">{ badge.expiration.day > 0 && badge.expiration.day + " day" }</p> 
          </div>
        }
        <button className="ml-[54px]" onClick={()=> {
          navigator.clipboard.writeText(badge.id)
          setIsCopied(true);
        }}>
          {
            isCopied ? 
            <HintCopyID type={"badge"}>
              <Check stroke="#292929"/>
            </HintCopyID>
            :
            <HintCopyID type={"badge"}>
              <Copy className={`stroke-black group-hover:stroke-brand-600`}/>
            </HintCopyID>
          }
        </button>
        <button onClick={()=> router.push(`/organization/management/create-badge/${badge.id}`)}>
          <img src="/edit.svg" alt="edit" className="ml-[16px]" />
        </button>
        <button onClick={ ()=>{ setIsOpenConfirmDelete(true) }}>
          <img src="/trash.svg" alt="trash" className='ml-[17px]' />
        </button>
      </div>
      <div className="w-[1660px] h-[1px] bg-[#D0D0D0]"></div>
      {
        isOpenConfirmDelete && 
        <ModalConfirmDelete 
          topic={"Delete Badge template?"}
          describe={"Are you sure you want to delete Badge template? It may affect to your Certificate Templete"}
          setStateOpen={setIsOpenConfirmDelete} 
          yesFunction={deleteBadge}
          id = {badge.id}
          
        />
      }
    </>
  )
}
