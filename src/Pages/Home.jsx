import IconArrowRight from "../Components/Icons/ArrowRight";
import PizzaImage from '../assets/Images/pizza2.png'
import CookingImage from '../assets/Images/cooking1.png'
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
function Home(){
    return(
        <div>
            {/* Hero section */}
            <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                   <div className="flex justify-center text-4xl md:justify-normal">
                       <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text ">
                           Enjoy the slice{' '}
                       </h1>
                       <h1>
                           😋
                       </h1>
                   </div>
                   
                   <p className="pb-4 text-[#687280]">
                          The Pizza App lets you order your favourite pizza from the comfort of your home. 
                          Enjoy the best Pizza in town with just few clicks.
                   </p>
                   
                   <button className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group">
                      Order now
                      <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                          <IconArrowRight />
                      </span>
                    </button>
                </div>
                <div>
                    <img 
                       src={PizzaImage}
                       alt = "Pizza"
                       width={500}
                       height={500}
                    />
                </div>
            
            </section>
            {/*Services Section */}
            <section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                        <img
                           src={CookingImage}
                           width={500}
                           className="rounded-lg"
                           alt="Cooking"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                          <div className="flex flex-col items-center lg:items-start">
                              <div>
                                 <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                                      Cooked by the best <br />chefs in the World
                                 </h2>
                                 <p className="text-base leading-relaxed text-[#687280]">
                                      There are many benefits regarding to that but the main ones are : 
                                 </p>
                              </div>
                          </div>
                          <div className="w-full p-1">
                               <div className="flex items-center h-full p-2 text-2xl rounded">
                                  <IconPatchCheck className="text-[#f38239] w-10 h-10 mr-4"/>
                                  <span className="font-bold title-font">Perfect taste</span>
                               </div>
                               <div className="flex items-center h-full p-2 text-2xl rounded">
                                  <IconPatchCheck className="text-[#f38239] w-10 h-10 mr-4"/>
                                  <span className="font-bold title-font">Prepared quickly</span>
                               </div>
                               <div className="flex items-center h-full p-2 text-2xl rounded">
                                  <IconPatchCheck className="text-[#f38239] w-10 h-10 mr-4"/>
                                  <span className="font-bold title-font">Food hygiene guarenteed</span>
                               </div>

                          </div>
                          
                    </div>

                </div>

            </section>
        </div>
    )
}
export default Home;