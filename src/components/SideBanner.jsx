
import Container from "../common/Container"

function SideBanner() {
    return (
        <>
        <Container>
        <div className="grid mt-8  md:grid-rows-2 md:grid-flow-col gap-4 ">
           <div className="relative lg:row-span-3">
           <img
                  src={'../images/miniture/sidebanner-1.jpg'}
                  alt="databannerinmg"
                  className="rounded-2xl row-span-3 h-[400px] lg:h-[92vh] object-cover"
                  width={"100%"}
                /> 
              <div className="absolute top-12 left-10">
              <p className="text-xl sm:text-[1.7rem] font-medium">Elevate your space</p>
              <button className="common-hover px-4 py-2 mt-4">Shop Now</button>
              </div>
           </div>
           <div className="relative col-span-2 ">
           <img
                  src={'../images/miniture/sidebanner-2.jpg'}
                  alt="databannerinmg"
                  className="rounded-2xl  h-[400px] lg:h-[45vh] object-cover"
                  width={"100%"}
                /> 
              <div className="absolute top-12 left-10">
              <p className="text-xl sm:text-[1.7rem] font-medium">Curated Living</p>
              <button className="common-hover px-4 py-2 mt-4">See More</button>
              </div>
           </div>
           <div className="relative lg:row-span-2 lg:col-span-2">
           <img
                  src={'../images/miniture/sidebanner-3.jpg'}
                  alt="databannerinmg"
                  className="rounded-2xl  h-[400px] lg:h-[45vh] object-cover"
                  width={"100%"}
                /> 
             <div className="absolute top-12 left-10">
              <p className="text-xl sm:text-[1.7rem] font-medium">Elighten your home</p>
              <button className="common-hover px-4 py-2 mt-4">See More</button>
              </div>
           </div>
                 
        </div>
        </Container>
        </>
    )
}

export default SideBanner
