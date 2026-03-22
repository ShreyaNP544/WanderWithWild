import { useParams } from 'react-router-dom'
import { Clock, Heart, MapPin, Mountain, MountainSnow, Share2 } from 'lucide-react'

function TrekDetails() {
  const { id } = useParams()

  return (
    <div className='w-full h-full flex flex-col gap-10 px-10 py-5 items-center'>
      <div className='trekDetails-navbar w-full flex justify-between items-center'>
        <div className='trekDetails-navbar-left flex gap-5 items-center'>
          <Mountain size={16} fill='#ffffff' stroke='#ffffff'/>
          <span>Wander With Wild</span>
        </div>

        <div className='trekDetails-navbar-right flex gap-8 items-center'>
          <div className='flex gap-5'>
            <span className='text-sm'>Treks</span>
            <span className='text-sm'>Expedition</span>
            <span className='text-sm'>Community</span>
          </div>
          <Share2 size={16} fill='#ffffff' stroke='#ffffff'/>
          <Heart size={16} fill='#ffffff' stroke='#ffffff'/>
          <span></span>
        </div>
      </div>

      <div className='trekDetails-image w-full h-125 flex bg-cover bg-center bg-no-repeat rounded-xl'
        style={{ backgroundImage: "url('/src/assets/pine-trees.jpeg')" }}>
        
        <div className='h-full w-full bg-black/20 flex flex-col justify-end gap-5 px-10 py-8'>
          <div className='trekDetails-image-badges flex gap-3'>
            <span className="text-white px-2 py-1 bg-[#1c3123] rounded-[25px] text-sm"> FEATURED EXPEDITION</span>
            <span className="text-white px-2 py-1 bg-[#47575a] rounded-[25px] text-sm">LIMITED SLOTS</span>
          </div>

          <div className='trekDetails-image-title text-white font-bold text-4xl'>The Pine Needle Trail</div>

          <div className='trekDetails-image-details text-[#c8c8c8] flex gap-5 items-center'>
            <span className='flex gap-1 items-center'>
              <MapPin size={20}/>
              Himachal Pradesh, India
            </span>
            <span className='flex gap-1 items-center'>
              <Clock size={20}/>
              4 Days / 3 Nights
            </span>
            <span className='flex gap-1 items-center'>
              <MountainSnow size={20}/>
              3,200 Max altitude
            </span>
          </div>
        </div>
      </div>

      <div className='trekDetails-description'>
        <div></div>

        <div></div>
      </div>

      <div className='trekDetails-footer'></div>
    </div>
  )
}

export default TrekDetails
