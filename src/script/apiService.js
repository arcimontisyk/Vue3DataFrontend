import Api from '@/script/api.js'

export default {
    getData () {
        return Api().get()
    }
}