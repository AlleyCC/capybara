import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getTopCategoryAPI } from '@/apis/category';

export function useCategory(){
  const categoryData = ref({});
  const route = useRoute();
  // get category
  const getCategory = async (id) => {
    const {result} = await getTopCategoryAPI(id);
    categoryData.value = result;
  }
  onMounted(() => getCategory(route.params.id));
  onBeforeRouteUpdate((to) => { //当 path 不变，但 params 或 query 变化时，Vue 不会重新创建组件，而是复用当前组件
    getCategory(to.params.id);
  })
  return {
    categoryData
  }

}
