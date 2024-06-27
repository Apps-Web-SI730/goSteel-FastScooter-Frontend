import http from "@/core/shared/services/http-common"

class FavoritesApiService {

    getAllFavorites() {
        return http.get("api/v1/favorite")
    }

    getFavoritesById(favoritesId) {
        return http.get(`/favorites/${favoritesId}`)
    }

    getFavoritesByUser(userId){
        return http.get(`api/v1/favorite/userId/${userId}`)
    }


    addFavorites(favorite) {
        return http.post("api/v1/favorite", favorite)
    }

    updateFavorite(favorite) {
        return http.put(`/favorites/${favorite.id}`, favorite)
    }

    deleteFavorite(favoriteId) {
        return http.delete(`api/v1/favorite/${favoriteId}`)
    }

}

export default new FavoritesApiService()