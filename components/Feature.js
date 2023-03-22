import Image from "next/image"
const Feature = ({images, afterimage, heading, description, features}) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex px-2 py-2 items-center rounded-full bg-yellowish'>
              <div className='rounded-full bg-white p-2'>
                <Image className='h-auto' src={images[0]} height={20} width={20} alt='' />
              </div>
              <p className='px-2 text-orange-600 font-bold'>{afterimage}</p>
            </div>
            <div className='mt-4 text-center text-5xl font-extrabold'>
              <h1>{heading}</h1>
            </div>
            <div className='mt-4 text-center text-xl text-blacklike'>
              <div>
                {description}
              </div>
              <div className='mt-4 uppercase text-sm font-semibold text-orangish'>
                {}
                <div className='flex flex-row items-center'>
                  <Image className='h-auto' src={images[1]} height={20} width={17} alt='' />
                  <p className='px-3 py-2'>{features[0]} </p>
                </div>
                <div className='pl-6 flex flex-row'>
                  <Image className='h-auto' src={images[2]} height={10} width={15} alt='' />
                  <p className='px-3'>featu</p>
                </div>
                <div className='flex flex-row'>
                  <Image className='h-auto' src={images[3]} height={20} width={15} alt='' />
                  <p className='px-3 py-2'>Screenshot and Upload Your Video Feed </p>
                </div>
              </div>
            </div>
          </div>
    )
}
{/* <div className='flex flex-col items-center'>
            <div className='flex px-2 py-2 items-center rounded-full bg-yellowish'>
              <div className='rounded-full bg-white p-2'>
                <Image className='h-auto' src={'/svg-export/edit-icon.svg'} height={20} width={20} alt='' />
              </div>
              <p className='px-2 text-orange-600 font-bold'>Whiteboard</p>
            </div>
            <div className='mt-4 text-center text-5xl font-extrabold'>
              <h1>Scribble, <span className='block'>Sketch, Draw</span>  & Diagram </h1>
            </div>
            <div className='mt-4 text-center text-xl text-blacklike'>
              <div>
                Lay out your plans, brainstorm
                <span className='block'>some ideas, or annotate an</span>
                <span className='block'>imported document or </span>
                screenshot.
              </div>
              <div className='mt-4 uppercase text-sm font-semibold text-orangish'>
                <div className='flex flex-row items-center'>
                  <Image className='h-auto' src={'/svg-export/multidirection.svg'} height={20} width={17} alt='' />
                  <p className='px-3 py-2'>Infinite, Multi-Directional Canvas </p>
                </div>
                <div className='pl-6 flex flex-row'>
                  <Image className='h-auto' src={'/svg-export/adobe.svg'} height={10} width={15} alt='' />
                  <p className='px-3'>Import PDFs and Other Docs</p>
                </div>
                <div className='flex flex-row'>
                  <Image className='h-auto' src={'/svg-export/camera.svg'} height={20} width={15} alt='' />
                  <p className='px-3 py-2'>Screenshot and Upload Your Video Feed </p>
                </div>
              </div>
            </div>
          </div> */}
