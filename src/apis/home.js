import http from "@/utils/http";

export function getBannerAPI(distributionSite = "1") {
  return http.get("/home/banner", { params: { distributionSite } });
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
