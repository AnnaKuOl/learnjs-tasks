if (-1 || 0) alert( 'first' ); // выполнится 'first', тк -1= true
if (-1 && 0) alert( 'second' ); // не выполнится, тк 0 даст false
if (null || -1 && 1) alert( 'third' ); // выполнится 'third', тк 1 даст true