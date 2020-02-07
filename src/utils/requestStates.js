const requestStates = {
    NONE    : 'none',       // request not done yet
    LOADING : 'loading',    // request done, not recieved anything yet
    SUCCESS : 'success',    // request done, recieved response successfully
    ERROR   : 'error',      // request done, recieved response with error
}
const NONE = 'none';
const LOADING = 'loading'; 
const SUCCESS = 'success';
const ERROR = 'error';

export { NONE, LOADING, ERROR, SUCCESS };

export default requestStates;