import bus from "../utils/bus";

function useFlashMessage() {
  function setFlashMessage(message, type) {
    bus.emit("flash", {
      message,
      type,
    });
  }

  return { setFlashMessage };
}

export default useFlashMessage;
