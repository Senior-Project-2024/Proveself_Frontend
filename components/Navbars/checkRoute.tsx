
export function checkRoute( pathname : string, setStatusNav : any , setStatusNavOrganization : any){
  if(pathname == "/"){
    setStatusNav("Home")
  }else if(pathname == "/about"){
    setStatusNav("About Us")
  }else if(pathname == "/verification"){
    setStatusNav("Verification")
  }else if(pathname == "/organization"){
    setStatusNavOrganization("Home")
  }else if(pathname == "/organization/about"){
    setStatusNavOrganization("About Us")
  }else if(pathname == "/organization/document"){
    setStatusNavOrganization("Documentation")
  }else if(pathname == "/organization/token"){
    setStatusNavOrganization("Token API")
  }else if(pathname == "/organization/management"){
    setStatusNavOrganization("Management")
  }else{
    setStatusNav("");
    setStatusNavOrganization("");
  }
}

export function checkRoute2( pathname : string){
  if(pathname == "/"){
    return "Home"
  }else if(pathname == "/about"){
    return "About Us"
  }else if(pathname == "/verification"){
    return("Verification")
  }else if(pathname == "/organization"){
    return "Home"
  }else if(pathname == "/organization/about"){
    return "About Us"
  }else if(pathname == "/organization/document"){
    return "Documentation"
  }else if(pathname == "/organization/token"){
    return "Token API"
  }else if(pathname == "/organization/management"){
    return "Management"
  }else{
    return ("");
  }
}