// export const Com1 = () => import('./Com1.vue')
// export const Com2 = () => import('./Com2.vue')
const path = require('path')
const files = require.context('./', false, /\.vue$/)
console.dir(files.keys());
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  console.log(files(key));
  modules[name] = files(key).default || files(key)
})
export default modules
