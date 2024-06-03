import axios, {AxiosError} from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retrieveLocalStorageData} from "../helpers/helpers";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

// побудуємо перехоплювач для headers в carServices і мет. getCars
axiosInstance.interceptors.request.use(request => {
    if
    (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh'))
        {
            const iTokenObtainPair = retrieveLocalStorageData<ITokenObtainPair>('tokenPair');

            request.headers.set('Authorization' , 'Bearer ' + iTokenObtainPair.access); } // пропишемо обгортку з папки helpers
    return request;
})
const authService = {
    authentication: async (authData:IAuthDataModel):Promise<boolean> => {
        let response;
        try {
            response =
                await  axiosInstance.post<ITokenObtainPair>('/auth', authData); // 401
            localStorage.setItem('tokenPair', JSON.stringify(response.data)) // tokenPair - назва об'єкта в ls, а
                                                        // response.data - відповідь від axiosInstance з токенами.
        } catch (e) {
            console.log(e);
        }


        return !!(response?.data?.access && response?.data?.refresh); // кастуємо до булевого значення!
    },
    refresh: async (refreshToken: string) => {

        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

const carService = {
    getCars: async () => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel> ('/cars');
            return response.data;}
        catch (e) {
            const axiosError = e as AxiosError; // отримаємо помилки різного номеру - 401...
            if (axiosError?.response?.status ===401) {
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh
                await authService.refresh(refreshToken); // відправляємо на сервіс аутентифіказії за навою парою
                await carService.getCars()  // покажи cars!
            }
        }
    }
        }


export {
    authService,
    carService
}