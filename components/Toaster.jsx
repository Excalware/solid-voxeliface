import { Toaster as HotToaster } from 'react-hot-toast';

export default function Toaster(props) {
    return (
        <HotToaster
            position="bottom-right"
            {...props}
        />
    );
};