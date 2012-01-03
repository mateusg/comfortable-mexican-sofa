/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
  // For more information on how to customize the toolbar, see http://docs.cksource.com/CKEditor_3.x/Developers_Guide/Toolbar
	config.toolbar_SofaConfig =
  [
      { name: 'clipboard',   items : [ 'Undo','Redo' ] },
      { name: 'styles',      items : [ 'Format' ] },
      { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike' ] },
      { name: 'colors',      items : [ 'TextColor','BGColor','RemoveFormat' ] },
      { name: 'paragraph',   items : [ 'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','Outdent','Indent','-','NumberedList','BulletedList'  ] },
      { name: 'links',       items : [ 'Link','Unlink', '-', 'Image','Table', '-', 'PasteFromWord' ] }
  ];
	config.toolbar = 'SofaConfig';
};
