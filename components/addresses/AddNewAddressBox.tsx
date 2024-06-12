import { useState } from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import AddressModal from "./AddressModal";

const AddNewAddressBox = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // Function To Open Modal
  const handleOpenModal = () => {
    document.body.classList.add("body-overflow");
    setShowModal(true);
  };

  // Function To Close Modal
  const handleCloseModal = () => {
    document.body.classList.remove("body-overflow");
    setShowModal(false);
  };

  return (
    <>
      <div
        className="w-full border border-dashed border-blue p-8 flex items-center justify-center cursor-pointer rounded-md min-h-[250px] bg-[#cce6fe66] lg:w-[40%]"
        onClick={handleOpenModal}
      >
        <div className="flex flex-col items-center gap-y-2">
          <MdOutlineAddLocationAlt className="w-8 h-8 fill-blue" />
          <span className="text-blue text-[14px]">افزودن نشانی جدید</span>
        </div>
      </div>
      <AddressModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default AddNewAddressBox;
