export const addSkill = (skillState : any, setSkillState: any, skillAdded : string)  => {
  let isDuplicate: boolean = false; 
  skillState?.forEach((currentSkill : any)=>{
    if(currentSkill === skillAdded){
      isDuplicate = true;
    }
  })

  // if not duplicate can add skill
  if(!isDuplicate){
    setSkillState([...skillState, skillAdded])
  }
}