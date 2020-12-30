export const useConfirm = (message="", onConfirm, onCancel) => {
    const confirmAction = () => {
      if(window.confirm(message)){
        onConfirm();
      } else{
        onCancel();
      }
    };
    
    if(typeof onConfirm !== "function"){
      return;
    }

    return confirmAction;
}