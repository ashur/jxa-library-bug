#!/usr/bin/env osascript -l JavaScript

function run()
{
	console.log( 'Loading only the first three Libraries...' );
	console.log();

	var red = Library( 'jxa-library-bug-red');
	console.log( '✓ red' );

	var orange = Library( 'jxa-library-bug-orange');
	console.log( '✓ orange' );

	var yellow = Library( 'jxa-library-bug-yellow');
	console.log( '✓ yellow' );

	console.log();
	console.log( 'Done.' );
}
