#!/usr/bin/env osascript -l JavaScript

function run()
{
	console.log( 'Loading all Libraries...' );
	console.log();

	var red = Library( 'jxa-library-bug-red');
	console.log( '✓ red' );

	var orange = Library( 'jxa-library-bug-orange');
	console.log( '✓ orange' );

	var yellow = Library( 'jxa-library-bug-yellow');
	console.log( '✓ yellow' );

	var green = Library( 'jxa-library-bug-green');
	console.log( '✓ green' );

	var blue = Library( 'jxa-library-bug-blue');
	console.log( '✓ blue' );

	var violet = Library( 'jxa-library-bug-violet');
	console.log( '✓ violet' );

	console.log();
	console.log( 'Done.' );
}
