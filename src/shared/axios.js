import instance from 'axios';
const AxiosClient = instance.create({
    baseURL: 'http://192.168.137.65:8080/api',
});

const requestHandler = (request) => {
    request.headers['Accept'] = "application/json";
    request.headers['Content-type']='application/json';
    // const session = JSON.parse(localStorage.getItem('user') || null);
    // console.log(request);
    // const temp = JSON.parse(request.data || null);
    // request.data = {...temp, empleado:session.data ? session.data.name : "N/A"};
    // if(session?.isLogged)
    // request.headers["Authorization"] = `Bearer ${session}`;
    return request;
};

const errorResponseHandler = (error) => {
    return Promise.reject(error);
};
const successResponseHandler = (response) => Promise.resolve(response.data.data);


AxiosClient.interceptors.request.use(
(request)=>requestHandler(request),
    (error) => Promise.reject(error)
);

AxiosClient.interceptors.response.use(
    (response) => successResponseHandler(response),
    (error)=> errorResponseHandler(error)
);
export default AxiosClient;