import React from "react";

import Searchbar from "./components/Searchbar/Searachbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

import "./App.scss";

class App extends React.Component {
  state = {
    loading: false,
    images: null,
    pageNum: 1,
    query: "",
    showModal: false,
    modalContent: {},
  };

  // 🐶 function to work with API, updates state's images depending on 3rd parametr (merges new with old or creates new 12)
  fetchImgs(query, pageNumber, prevImg = []) {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}'&page=${pageNumber}&per_page=12&key=23034166-be8967e0ea66b0703121f1d79`
    )
      .then((r) => r.json())
      .then((imgs) => {
        this.setState({ images: [...prevImg, ...imgs.hits], loading: false });
        if (prevImg.length !== 0) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((err) => alert(`${err}`));
  }

  //load-more-button only shows with img-gallery-component, it relies on App's state - query, page-number and merges old images into new response
  onLoadMoreBtnClick = (e) => {
    e.preventDefault();

    this.fetchImgs(this.state.query, this.state.pageNum, this.state.images);

    this.setState((prevState) => ({
      pageNum: (prevState.pageNum += 1),
    }));
  };

  //loads new query, always 1st page and updates App's state for pagination, but never uses that
  onSubmit = (query) => {
    this.setState({ query, pageNum: 1 });

    this.fetchImgs(query, 1);

    this.setState((prevState) => ({
      pageNum: (prevState.pageNum += 1),
    }));
  };

  //==== MODAL ==== methods
  // changes state so modal component can or can't be shown
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // directly works on images, to open modal, because needs image's object to show(largeImageURL), it works from ImageGalleryItem
  onImgClick = (img) => {
    this.setState({ modalContent: img });
    this.toggleModal();
  };

  //=====
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <Loader />}
        {this.state.images && (
          <ImageGallery
            imagesArray={this.state.images}
            onImgClick={this.onImgClick}
            onBtnClick={this.onLoadMoreBtnClick}
          />
        )}
        {this.state.showModal && (
          <Modal img={this.state.modalContent} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
