const db = firebase.database()
let check

document.getElementById('publish').onclick = function(){
    let title = document.getElementById('title').value
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let content = document.getElementById('content').value
    let NumberOfArticles = 0

    if(title != undefined && name != undefined && description != undefined && content != undefined){
        db.ref('NumberOfArticles/value').on('value', function(data){
            NumberOfArticles = data.val()
        })
        NumberOfArticles += 1
        db.ref('/ArticleInformation/'+NumberOfArticles).update({
            titleOfArticle: title,
            nameOfAuthor: name,
            descriptionForArticle: description,
            contentOfArticle: content
        })
        db.ref('NumberOfArticles').update({
            value: NumberOfArticles
        })
    }
}