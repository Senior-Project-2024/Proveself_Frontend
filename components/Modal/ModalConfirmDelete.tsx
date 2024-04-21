import Modal from "../Modal"

interface IModalConfirmDelete {
  setStateOpen : any
  yesFunction : any
  topic : string
  describe : string
}

export default function ModalConfirmDelete({topic, describe, setStateOpen, yesFunction } : Readonly<IModalConfirmDelete>) {
  return (
    <Modal width="w-auto" height="h-auto" typeClose="inside">
      <div className="flex flex-col h-full items-center justify-center gap-[16px] py-[32px] px-[46px]">
        <p className="w-[464px] text-center medium30">{topic}</p>
        <p className="w-[480px] text-center text-gray-100 regular18">{describe}</p>
        <div className="flex flex-row gap-[30px] mt-3">
          <button className="border border-blue-400 px-[24px] py-[10px] rounded-lg hover:bg-slate-50"
            onClick={()=>setStateOpen(false)}
          >
            <p className="medium20 text-blue-400">NO</p>
          </button>
          <button className="bg-red px-[24px] py-[10px] rounded-lg hover:bg-[#CE2A1E]" onClick={()=> yesFunction()}>
            <p className="medium20 text-white">YES</p>
          </button>
        </div>
      </div>

    </Modal>
  )
}
