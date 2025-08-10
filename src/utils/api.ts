import axios, { AxiosResponse } from "axios";

import { BASE_URL, ErrorCode, LocalStorage } from "./constants";
import {
  ILogin,
  IResponse,
  IUserData,
  ISignUp,
  IVerifyNumberResponse,
  ITokenResponse,
  IAddRestaurant,
  IAddRestaurantPhoto,
  ICuisine,
  IUpdRestaurant,
  IRestaurant,
  IMenu,
  IResponseOrders,
  IErrorResponse,
  IEditUserProfile,
  IAllRestaurantsResponse,
} from "./types";

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    "Cache-Control": "no-cache",
  },
  timeout: 10000,
});

export const api = {
  // Auth
  authMe: () => {
    return client.get<IResponse<IUserData>>("auth/me").then((res) => res.data);
  },
  signUp: (data: ISignUp) => {
    return client
      .post<IResponse<IUserData>>("users/registration", data)
      .then((res) => res.data);
  },
  login: (data: ILogin) => {
    return client
      .post<IResponse<boolean>>("auth/login", data)
      .then((res) => res.data);
  },
  phoneVerify: (data: IVerifyNumberResponse) => {
    return client
      .put<IResponse<ITokenResponse>>("auth/phoneVerify", data)
      .then((res) => tokenHandler(res));
  },
  refresh: (refreshToken: string) => {
    return client
      .post<IResponse<ITokenResponse>>("auth/refresh", { refreshToken })
      .then((res) => tokenHandler(res));
  },

  // Restaurants
  getRestaurant: (restaurantId: string) => {
    return client
      .get<IResponse<IRestaurant>>(`/restaurants/${restaurantId}`)
      .then((res) => res.data);
  },
  getMyRestaurants: () => {
    return client
      .get<IResponse<IAllRestaurantsResponse>>("restaurants/admin")
      .then((res) => res.data);
  },
  addRestaurant: ({ adminId, ...data }: IAddRestaurant) => {
    return client
      .post<IResponse<IRestaurant>>(`restaurants?adminId=${adminId}`, data)
      .then((res) => res.data);
  },
  addRestaurantPhoto: ({ restaurantId, photo }: IAddRestaurantPhoto) => {
    const formData = new FormData();
    formData.append("photo", photo);

    return client
      .post<IResponse<string>>(
        `/restaurants/${restaurantId}/addPhoto`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => res.data);
  },
  editRestaurant: ({ _id, ...restaurant }: IUpdRestaurant) => {
    return client
      .put<IResponse<IRestaurant>>(`restaurants/${_id}`, restaurant)
      .then((res) => res.data);
  },
  getRestaurantInformation: (placeId: string) => {
    return new Promise((res) => {
      const mapElement = document.getElementById("map") as HTMLElement;

      if (mapElement) {
        const map = new google.maps.Map(mapElement);
        const service = new google.maps.places.PlacesService(map);
        return service.getDetails({ placeId }, (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            res(place);
          }
        });
      } else {
        res(null);
      }
    });
  },

  // Cuisines
  getCuisines: () => {
    return client
      .get<IResponse<ICuisine[]>>("cuisines")
      .then((res) => res.data);
  },

  // Menu
  getMenu: (restaurantId: string) => {
    return client
      .get<IResponse<IMenu>>(`menu/${restaurantId}`)
      .then((res) => res.data);
  },

  getProduct: (menuCategoryId: string) => {
    return client
      .get<IResponse>(`/menu/products/${menuCategoryId}`)
      .then((res) => res.data);
  },

  // Orders
  fetchOrders: (skip: number = 0, quantity: number = 100) => {
    return client
      .get<IResponse<IResponseOrders>>(
        `orders?skip=${skip}&quantity=${quantity}`
      )
      .then((res) => res.data);
  },
  fetchRestaurantOrders: (id: string) => {
    //NOTE: temporary commented out
    //after - delete
    return client
      // return axios
      .get<IResponse>(
        // `http://localhost:4444/orders/${id}`
        `/orders/${id}`
      )
      .then((res) => res.data)
  },
  // Settings
  editUser: (userId: string, userData: IEditUserProfile) => {
    return client
      .put<IResponse>(`/users/${userId}`, userData)
      .then((res) => res.data);
  },

  // Stripe
  connectedRestaurantToStripe: (restaurantId: string) => {
    return client
      .post<IResponse>(`/stripe/account/${restaurantId}`)
      .then((res) => res.data);
  },
  stripeAccountLink: (restaurantId: string) => {
    return client
      .get<IResponse>(`/stripe/accountLink/${restaurantId}`)
      .then((res) => res.data);
  },
};

function tokenHandler(response: AxiosResponse<IResponse<ITokenResponse>>) {
  if (response && response.data) {
    const { refresh_token, access_token } = response.data.data;
    if (refresh_token && access_token) {
      localStorage.setItem(LocalStorage.Token, access_token);
      localStorage.setItem(LocalStorage.RefreshToken, refresh_token);
      client.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    }
  }
  return response.data;
}

export const setHeader = (access_token: string) => {
  client.defaults.headers.common.Authorization = `Bearer ${access_token}`;
};

export const clearAxiosConfig = () => {
  localStorage.removeItem(LocalStorage.Token);
  localStorage.removeItem(LocalStorage.RefreshToken);
  localStorage.removeItem(LocalStorage.RestaurantID);
  delete client.defaults.headers.common.Authorization;
};

const responseInterceptor = (response: AxiosResponse) => response;

const rejectInterceptor = async (error: any) => {
  const { response, config } = error;
  if (response.data.error.code === ErrorCode.Unauthorized) {
    const refreshToken = localStorage.getItem(LocalStorage.RefreshToken);
    if (refreshToken) {
      try {
        const refreshRes = await api.refresh(refreshToken);
        config.headers.Authorization = `Bearer ${refreshRes.data.access_token}`;
        return await axios.request(config);
      } catch (e) {
        clearAxiosConfig();
      }
    }
  }

  const someError = {
    code: 666,
    message: "Something went wrong...",
  };

  return Promise.reject<IErrorResponse>(response.data.error || someError);
};

client.interceptors.response.use(responseInterceptor, rejectInterceptor);
