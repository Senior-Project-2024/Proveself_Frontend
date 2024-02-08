import Button from "@/components/Button"
export default function NotFound(){
  return(
    <section>
      <div className="flex flex-col items-center mt-[100px] gap-[74px] ">
          <img src="/error404.png" alt="error404" className="w-[823px] h-[528px]" />
          <div className="flex flex-col gap-[34px] items-center">
            <p className="font-Rubik text-[48px] font-medium leading-[56px] ">Opps! Page not found.</p>
            <p className="light24 text-gray-200 text-center">We are sorry! The page you request can not be found. <br></br>
              Please go back to the homepage.</p>
          </div>
          <Button text="Go Home" link="/">
            <img src="/home.svg" alt="Home" />
          </Button>
      </div>
    </section>
  )
}