import http from "@/utils/http";

export function getBannerAPI() {
  return http.get("/home/banner");
}

export const getNewAPI = () => {
  return http.get("/home/new");
}

export const getHotAPI = () => {
  return http.get("/home/hot");
}

export const getGoodsAPI = () => {
    return http.get('/home/goods')
}
