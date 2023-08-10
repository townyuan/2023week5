import './assets/scss/all.scss';

// console.log("Hello world!");

// CKEditor
ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .then( editor => {
  console.log( editor );
} )
  .catch( error => {
  console.error( error );
} );


$(".btn-reply").click(function(){
  $(".ck-editor").toggle();
});