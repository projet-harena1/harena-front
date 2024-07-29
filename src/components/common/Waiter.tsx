import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface WaiterProps {
    loadingState: boolean;
}

const Waiter: React.FC<WaiterProps> = ({ loadingState }) => {
    return (
        <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 9999 }} open={loadingState}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};

Waiter.propTypes = {
    loadingState: PropTypes.bool.isRequired,
};

export default Waiter;
