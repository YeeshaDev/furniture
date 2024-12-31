
import { FaTimes } from 'react-icons/fa'
import ThreeSixty from 'react-360-view'

export default function ProductRotateModal({onClose,selectedImage}) {
    //console.log('selectedImage',selectedImage)
    return (
        
          <div className="modal-overlay">
          <div className="modal-content w-[95%] sm:w-2/3 relative max-h-[600px]  bg-white overflow-hidden">
            <span
              className="absolute -top-5 flex items-center justify-center bg-black h-5 w-5 rounded-full z-[999] text-white cursor-pointer right-0 p-4"
             onClick={onClose}
            >
              <FaTimes />
            </span>  
             <div className='w-[90%] py-10'>
             <ThreeSixty
    amount={36}
    imagePath={selectedImage}
    fileName="{index}.jpeg"
  spinReverse
  autoplay
  loop
/>
             </div>
          
        </div>
        </div>
    )
}
