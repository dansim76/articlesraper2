$(document).ready(function(){
    var articleContainer = $(".article-container");

    $(document).on("click", ".btn.delete", handleArticleDelete);
    $(document).on("click", ".btn.notes", handleArticlenotes);
    $(document).on("click",".btn.save", handleNoteSave);
    $(document).on("click", ".btn.note-delete", handleNoteDelete);

    initPage();
    




}