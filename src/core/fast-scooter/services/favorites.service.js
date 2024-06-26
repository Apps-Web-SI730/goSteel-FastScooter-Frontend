import http from "@/core/shared/services/http-common"

class FavoritesApiService {

    getAllFavorites() {
        return http.get("/favorites")
    }

    getFavoritesById(favoritesId) {
        return http.get(`/favorites/${favoritesId}`)
    }

    getFavoritesByUser(userId){
        return http.get(`/users/${userId}/favorites`)
    }


    addFavorites(favorite) {
        return http.post("/favorites", favorite)
    }

    updateFavorite(favorite) {
        return http.put(`/favorites/${favorite.id}`, favorite)
    }

    deleteFavorite(favoriteId) {
        return http.delete(`/favorites/${favoriteId}`)
    }

}

export default new FavoritesApiService()