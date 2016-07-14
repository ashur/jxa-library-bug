## Description

A _JavaScript for Automation_ (JXA) script which instantiates three or more Libraries halts on macOS 10.12b2 (`16A239m`).

## Steps to Reproduce

1. Clone this repository to a local folder on a machine running macOS 10.12b2 — ex., `~/Downloads`
1. In Terminal.app, `cd` to the repository directory:

```
$ cd ~/Downloads/jxa-library-bug
```
1. Run the [compile script](./compile.sh) to quickly compile JavaScript library files from source to `~/Library/Script Libraries`

```
$ ./compile.sh      
Compiling to '~/Library/Script Libraries'...

red.js        >> jxa-library-bug-red.scpt
orange.js     >> jxa-library-bug-orange.scpt
yellow.js     >> jxa-library-bug-yellow.scpt
green.js      >> jxa-library-bug-green.scpt
blue.js       >> jxa-library-bug-blue.scpt
violet.js     >> jxa-library-bug-violet.scpt

```
1. From the command line, run the executable script [colors.js](./colors.js):

```
$ ./colors.js
```

### Expected Results

As on OS X 10.11.5, all libraries are loaded:

```
./colors.js
Loading all Libraries...

✓ red
✓ orange
✓ yellow
✓ green
✓ blue
✓ violet

Done.
```

### Actual Results

Script execution hangs prematurely, typically after the third library is included:

```
./colors.js
Loading all Libraries...

✓ red
✓ orange
✓ yellow
```

Command execution must be halted by the user (ex., by pressing `Control-C` at the command line).

## Notes

* The same behavior is reproducible by running `colors.js` (minus the hashbang line) in **Script Editor.app**
* The `colors-some.js` script only instantiates three libraries:

```
./colors-some.js
Loading only the first three Libraries...

✓ red
✓ orange
✓ yellow

Done.
```

and does successfully complete when run.
