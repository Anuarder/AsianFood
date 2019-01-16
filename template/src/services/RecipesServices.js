import Api from '@/services/Api'

export default {
    getAll(){
        return Api().get('recipes')
    },
    getRecipesByCategory(category){
        return Api().get(`recipes/${category}`);
    },
    getRecipeByID(id){
        return Api().get(`recipe/${id}`);
    },
    addToFavorite(id){
        return Api().put(`recipe/${id}/setToFavorites`);
    },
    deleteFromFavorites(id){
        return Api().put(`recipe/${id}/deleteFromFavorites`);
    }
}