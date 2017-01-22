(function(){
    WikiAPI.contentOfPage('משתמש:1Or/try',(content) => {
        var updater = new WikiUpdater();
        updater.updateArticle('משתמש:1Or/try','ניסיון', content + 'א');
    })
})();