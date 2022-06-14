import ReactDOM from "react-dom";
import Backdrop from "components/features/showModal/Backdrop";
import ContentOverlay from "./ContentOverlay";

const ShowModal = (props) => {
  /* To adjust Protal destination
   index.html:
      <div id="overlayRootSecond"></div>
      <div id="backdropRootSecond"></div>
   globalCss/common.scss
      .modalTopOverlayZIndex
      .modalTopBackdropZIndex 
      .modalSecondOverlayZIndex 
      .modalSecondBackdropZIndex 
    props.modalLayer controls the paring of Protal destination and z-index
  */
  const modalLayer = props.modalLayer;
  let overlayProtalClass;
  let overlayZIndexClass;
  let backdropProtalClass;
  let backdropZIndexClass;
  if (modalLayer.toLowerCase() === "top") {
    overlayProtalClass = "overlayRootTop";
    overlayZIndexClass = "modalTopOverlayZIndex";
    backdropProtalClass = "backdropRootTop";
    backdropZIndexClass = "modalTopBackdropZIndex";
  } else if (modalLayer.toLowerCase() === "second") {
    overlayProtalClass = "overlayRootSecond";
    overlayZIndexClass = "modalSecondOverlayZIndex";
    backdropProtalClass = "backdropRootSecond";
    backdropZIndexClass = "modalSecondBackdropZIndex";
  }

  return (
    <>
      {ReactDOM.createPortal(
        <ContentOverlay
          className={props.className}
          zIndexClass={overlayZIndexClass}
          content={props.ModalContent}
        />,
        document.getElementById(`${overlayProtalClass}`)
      )}
      {ReactDOM.createPortal(
        <Backdrop
          className={props.className}
          zIndexClass={backdropZIndexClass}
          onClose={props.onClose}
        />,
        document.getElementById(`${backdropProtalClass}`)
      )}
    </>
  );
};

export default ShowModal;
