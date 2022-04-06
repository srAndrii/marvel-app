
import Spinner from '../components/spiner/spiner';
import ErrorMesage from '../components/errorMesage/ErrorMesage';
import Skeleton from '../components/skeleton/Skeleton';


const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton />;
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component data={data} />;
        case 'error':
            return <ErrorMesage />;
        default:
            throw new Error('Unexpected process state');
    }
}
export default setContent