import { AnimatePresence, motion } from "framer-motion";
import SearchInput from "../SearchInput";
import { CloseIcon } from "../svgs/CloseIcon";

interface Props {
  showModal: boolean;
  handleCloseModal: () => void;
}

const AddressModal = ({ showModal, handleCloseModal }: Props) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="bg-[#00000033] w-[100vw] h-[100vh] fixed z-10 top-0 left-0 flex justify-center items-center"
          initial={{
            display: "hidden",
            opacity: 0,
          }}
          animate={{
            display: "flex",
            opacity: 1,
          }}
          exit={{
            display: "hidden",
            opacity: 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute z-40 w-full h-full flex justify-center items-center">
            <div className="p-4 h-1/2 w-full bg-white rounded-lg flex flex-col gap-y-4 relative lg:h-[90%] lg:w-1/2 lg:mx-auto lg:my-auto">
              <div className="flex items-center justify-between">
                <span>ثبت آدرس جدید</span>
                <div
                  className="p-1 rounded-full bg-neutral-100 cursor-pointer"
                  onClick={handleCloseModal}
                >
                  <CloseIcon className="w-6 h-6 stroke-secondary" />
                </div>
              </div>
              <div className="w-full h-[80%] bg-neutral-100 rounded-md"></div>
              <button className="text-white bg-blue px-4 flex justify-center items-center rounded-md text-[14px] h-12 w-[160px] mx-auto whitespace-nowrap">
                ثبت نشانی جدید و ادامه
              </button>
              <div className="absolute top-20 w-[85%] left-1/2 translate-x-[-50%]">
                <SearchInput placeholder="جستجوی آدرس" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddressModal;
