FILENAME_SCRIPT="`pwd`/${BASH_SOURCE:-$0}"
DIR_AUTOMATION=`dirname $FILENAME_SCRIPT`

mkdir -p "$HOME/Library/Script Libraries/"

compile()
{
	source=$1
	echo "${source}.js  \t>> jxa-library-bug-$source.scpt"
	osacompile -l JavaScript -o ~/Library/Script\ Libraries/jxa-library-bug-$source.scpt $DIR_AUTOMATION/$source.js
}

echo "Compiling to '~/Library/Script Libraries'..."
echo

compile red
compile orange
compile yellow
compile green
compile blue
compile violet

echo ""
