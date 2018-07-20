import address from './address'
import axiosConfig from './axiosConfig'

const generateApiMap = axiosConfig.apiMap(address)
export default {
  install (vue) {
    vue.prototype.$http = generateApiMap
  }
}
