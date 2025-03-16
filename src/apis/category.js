import http from "@/utils/http";

export function getTopCategoryAPI(id){
    return http.get('/category',{ params: { id }});
}
