import useDisclosure from 'hooks/useDisclosure';
import { BlackButton } from './Buttons/BlackButton';
import { ModalHowItWorks} from './Modals/ModalHowItWorks';

interface Description {
  heading: string;
  description1: string;
  description2: string;
  description3: string;
}

export const Description = ({ ...props }: Description) => {
  const { isOpen, open, close } = useDisclosure(false);

  return (
    <>
      <div className='bg-gradient-to-r from-[#FFFFFF]/[0.1] to-[#FFFFFF]/[0.2] py-8 px-7 md:px-0 md:flex justify-between items-center mt-7'>
        <div className='md:flex items-center w-full max-w-[1700px] md:px-8 mx-auto'>
          <div className='w-full md:w-1/4 md:block flex justify-between items-center pb-[10px] md:pb-0'>
            <span className='tracking-[10px] font-myriadreg text-3xl lg:text-5xl'>
              {props.heading}
            </span>
            <div className='block md:hidden w-[100px]'>
              <BlackButton text='How it works' onClick={open}/>
            </div>
          </div>
          <div className='w-full md:w-1/2 text-base lg:text-xl'>
            <div>{props.description1}</div>
            <div>{props.description2}</div>
            <div>{props.description3}</div>
          </div>
          <div className='w-1/4 hidden md:flex justify-end'>
            <div className='lg:w-[170px] w-[120px]'>
              <BlackButton text='How it works' onClick={open} />
            </div>
          </div>
        </div>
      </div>
      <ModalHowItWorks header='How it works' textButton='OK' isOpen={isOpen} onClickClose={close}/>
      {/* {router.pathname == '/borrow' && <ModalVideo header='How it works' description='Coming Soon...' textButton='OK' isOpen={isOpen} onClickClose={close}/>} */}

    </>
  );
};
