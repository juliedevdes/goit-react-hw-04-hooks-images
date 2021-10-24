import { useState } from "react";

import Searchbar from "./components/Searchbar/Searachbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

import "./App.scss";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const fetchImgs = function (query, pageNumber, prevImg = []) {
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}'&page=${pageNumber}&per_page=12&key=23034166-be8967e0ea66b0703121f1d79`
    )
      .then((r) => r.json())
      .then((imgs) => {
        setImages([...prevImg, ...imgs.hits]);
        setLoading(false);
        if (prevImg.length !== 0) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((err) => alert(`${err}`));
  };

  const onLoadMoreBtnClick = (e) => {
    e.preventDefault();
    fetchImgs(query, pageNum, images);
    setPageNum((s) => s + 1);
  };

  const onSubmit = (query) => {
    setQuery(query);
    setPageNum(1);

    fetchImgs(query, 1);
    setPageNum((s) => s + 1);
  };

  //==== MODAL ==== methods
  const toggleModal = () => {
    setShowModal((s) => !s);
  };

  const onImgClick = (img) => {
    setModalContent(img);
    toggleModal();
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader />}
      {images && (
        <ImageGallery
          imagesArray={images}
          onImgClick={onImgClick}
          onBtnClick={onLoadMoreBtnClick}
        />
      )}
      {showModal && <Modal img={modalContent} toggleModal={toggleModal} />}
    </div>
  );
}
