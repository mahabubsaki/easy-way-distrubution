import { toast } from "react-hot-toast";

export default function toaster(message: string, status: boolean) {
    status ? toast.success(message, { duration: 3000 }) : toast.error(message, { duration: 3000 });
}