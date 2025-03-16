import { useIntersectionObserver } from "@vueuse/core"

export const lazyPlugin = {
  install(app){
    app.directive("img-lazy", {
      mounted(el, binding){
      //el: 指令綁定元素 img
      //binding:binding.value 指令=后面表达式的值 图片url
      // console.log(el, binding.value)
      const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting){
              el.src = binding.value;
              stop(); // 如果加載過一次就不需要重複加載
            }
          }
        )
      }
    })
  }
}
