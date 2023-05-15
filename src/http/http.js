import axios from "axios";

export const firstFetch = (
  category,
  dispatch,
  setImageData,
  setRange,
  setError
) => {
  // fetching data in the first time
  setError(null); // removing error notification if there was error before
  axios(`${process.env.REACT_APP_SERVER}/pixabay/?category=${category}`)
    .then((res) => {
      const { images } = res.data;
      dispatch(setImageData(images)); // update images state with the images from the response
      setRange(9); // setting the range to 9 for sending it in the pagination request so that
      // the server will send beck the next or prev 9
    })
    // setting error notification if there is one
    .catch((error) => setError(error.response.data.message));
};

export const paginationHandler = (
  direction,
  category,
  range,
  dispatch,
  setImageData,
  setRange,
  sorted,
  setError
) => {
  // pegination request

  setError(null); // removing error notification if there was error before
  axios(
    `${process.env.REACT_APP_SERVER}/pixabay/pagination?category=${category}&range=${range}&direction=${direction}&sorted=${sorted}`
  )
    .then((res) => {
      const { images, range } = res.data;
      dispatch(setImageData(images)); // update images state with the images from the response
      setRange(range); // set the new range for the the next call of the function
    })
    // setting error notification if there is one
    .catch((error) => setError(error.response.data.message));
};

export const sortHandler = (
  category,
  dispatch,
  setImageData,
  setRange,
  setSorted,
  setError
) => {
  // sort request for sorting the images by id

  setError(null); // removing error notification if there was error before
  axios(`${process.env.REACT_APP_SERVER}/pixabay/sort?category=${category}`)
    .then((res) => {
      const { images } = res.data;
      dispatch(setImageData(images));
      setRange(9);
      setSorted(true); // updating sorted state to true for pegination function
      // the pegination api should know if the images were sorted
    })
    // setting error notification if there is one
    .catch((error) => setError(error.response.data.message));
};
