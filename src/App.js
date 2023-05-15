import "./App.css";
import { useEffect, useState } from "react";
import { Modal } from "./components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "./redux/slices/modal";
import { setImageData } from "./redux/slices/images";
import { firstFetch, paginationHandler, sortHandler } from "./http/http";

function App() {
  const dispatch = useDispatch();
  const imagesData = useSelector((state) => state.images.images);

  const [category, setCategory] = useState("flowers");
  const [range, setRange] = useState(9);
  const [sorted, setSorted] = useState(false);
  const [error, setError] = useState("");

  const setModalImageData = (element) => {
    dispatch(
      setModalData({
        imageDetails: {
          views: element.views,
          downloads: element.downloads,
          collections: element.collections,
          likes: element.likes,
          comments: element.comments,
        },
      })
    );
  };

  const setModalCategoriesSelect = () => {
    dispatch(
      setModalData({
        categories: ["flowers", "animals", "sport", "work"],
      })
    );
  };

  useEffect(() => {
    firstFetch(category, dispatch, setImageData, setRange, setError);
  }, [category, dispatch]);

  return (
    <>
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      <div className="actions">
        <button
          onClick={() =>
            paginationHandler(
              "prev",
              category,
              range,
              dispatch,
              setImageData,
              setRange,
              sorted,
              setError
            )
          }
          className="prev-button"
        >
          prev
        </button>
        <button onClick={setModalCategoriesSelect} className="next-button">
          category
        </button>
        <button
          onClick={() =>
            paginationHandler(
              "next",
              category,
              range,
              dispatch,
              setImageData,
              setRange,
              sorted,
              setError
            )
          }
          className="prev-button"
        >
          next
        </button>
      </div>
      <div className="sort">
        <button
          onClick={() =>
            sortHandler(
              category,
              dispatch,
              setImageData,
              setRange,
              setSorted,
              setError
            )
          }
          className="next-button"
        >
          sort
        </button>
      </div>
      <div className="grid-container">
        {imagesData.length > 0 &&
          imagesData.map((element) => (
            <button
              onClick={() => setModalImageData(element)}
              key={element.id}
              className="image-container"
            >
              <img src={element.largeImageURL} alt={element.tags} />
            </button>
          ))}
      </div>

      <Modal setCategory={setCategory} />
    </>
  );
}

export default App;
