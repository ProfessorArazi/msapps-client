import { closeModal } from "../../redux/slices/modal";
import { Select } from "../select/Select";
import { Table } from "../table/Table";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";

export const Modal = ({ setCategory }) => {
  const dispatch = useDispatch();

  const modalData = useSelector((state) => state.modal.modalData);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    modalData && (
      <>
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModalHandler}>
              X
            </button>
            <div className="modal-content">
              {modalData.imageDetails ? (
                <Table data={modalData.imageDetails} />
              ) : (
                <Select
                  options={modalData.categories}
                  setCategory={setCategory}
                  closeModal={closeModalHandler}
                />
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
};
