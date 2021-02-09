export const setFavoriteShow = show => {
  let favoratLists = localStorage.getObject('favorites_list') || [];
   
    if(show.isFavorite)
        favoratLists.push(show.id); 
    else
        favoratLists = favoratLists.filter(el => el !== show.id);
    
    localStorage.setObject('favorites_list', [...new Set(favoratLists)]); 
};

export const isShowFavorite = showId => {
    const favoratLists = localStorage.getObject('favorites_list') || [];
    return favoratLists.includes(showId);
}

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}
