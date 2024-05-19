import React,{useState} from 'react'
import './Accordion.css'

const Accordion = () => {

    const [isClicked, setIsClicked] = useState()
    const details =[{
        id: 1,
        title: "Description",
        before_click_sign: "+",
        after_click_sign:"-",
        content: "guigiugiug"
    },

    {
        id: 2,
        title: "Additional Information",
        before_click_sign: "+",
        after_click_sign:"-",
        content: "asfdsgfsrg"
    }]



  return (<div className='Accordion'>

  {
        details.map((e)=>(
        
                

            <section key={e.id} className= 'Accordion_description_container'>

                <div onClick={()=>setIsClicked(isClicked === e.id ? null : e.id)} className='Accordion_description_container_title' >{e.title} <span>{(isClicked === e.id) ? e.after_click_sign : e.before_click_sign}</span></div>
                    
                <div  className={(isClicked === e.id) ? 'Accordion_description_wrapper_onClick': 'Accordion_description_wrapper'}>
                    <div>{e.content}</div>
                </div>
    
            </section>
    
       

        ))
    } 
   
            
        
        
        
        
        </div>

    
   
  )
}

export default Accordion






    // <div className='Accordion_container'>

    //             <section className='Accordion_description_container'>
    //                 <div onClick={()=>setIsClicked(!isClicked)} className='Accordion_description_container_title'>Description <span>{isClicked ? "-" : "+"}</span></div>

    //                 <div className={(isClicked) ? 'Accordion_description_wrapper_onClick': 'Accordion_description_wrapper'}>
    //                     <div>guigiugiug</div>
    //                 </div>

    //             </section>

    //         </div>

    //         <div className='Accordion_container'>

    //             <section className='Accordion_description_container'>
    //                 <div onClick={()=>setIsClicked(!isClicked)} className='Accordion_description_container_title'>Additional Information <span>{isClicked ? "-" : "+"}</span></div>

    //                 <div className={(isClicked) ? 'Accordion_description_wrapper_onClick': 'Accordion_description_wrapper'}>
    //                     <div>asfdsgfsrg</div>
    //                 </div>

    //             </section>

    //         </div>