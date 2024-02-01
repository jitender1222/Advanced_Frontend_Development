import { toast } from 'react-toastify';
console.log(toast)
export function showToast(message) {
    const position = toast.POSITION ? toast.POSITION.TOP_RIGHT : 'top-right'; // Set default position
    toast.success(message, {
        position: position,
    });
}


export function showError(message){
    const position = toast.POSITION ? toast.POSITION.TOP_RIGHT : 'top-right'; // Set default position
    toast.error(message, {
        position: position,
      });
}