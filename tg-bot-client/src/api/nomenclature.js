import { http } from './http'

// https://api-ru.iiko.services/api/1/nomenclature
const API_VERSION = '/api/1'

const getMenu = (organizationId) => http.post(`${API_VERSION}/nomenclature`,{ organizationId })


export const nomenclatureApi = {
    getMenu
}