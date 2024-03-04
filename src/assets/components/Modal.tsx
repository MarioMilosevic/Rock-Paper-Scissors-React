const Modal = () => {
  return (
    <div className="overlay mario">
      <div className="modal">Ovo je modal</div>
    </div>
  );
};

// fixed top-0 right-0 w-full h-full blur-lg z-10 bg-white
// w-[200px] h-[200px] bg-white

// position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     filter: blur(0.3rem);
//     z-index: 10;
//     background-color: rgba(0, 0, 0, 0.6);

// .modal {
//     width: 70rem;
//     height: 45rem;
//     background-color: var(--secondary-color);
//     color: #fff;
//     position: fixed;
//     border-radius: 1rem;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 100;
//     -webkit-box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.5);
//     -moz-box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.5);
//     box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.5);
//   }
export default Modal;
