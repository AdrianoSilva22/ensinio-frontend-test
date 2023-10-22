import { apiService } from "./apiService"

export const ItemService = () => {

    const url = "/items"

    const findAllItems = () => {
        return apiService.get(`${url}`)
    }

    return {
        findAllItems
    }
}
