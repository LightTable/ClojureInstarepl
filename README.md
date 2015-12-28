## Description

This LightTable plugin provides a Clojure Instarepl which continously evaluates expressions in an instarepl tab.
An instarepl is only recommended for spikes on small pieces of code with little to no side effects. For most Clojure
repl needs, use the inline repl that comes with the [Clojure plugin](https://github.com/LightTable/Clojure).

**Note: This plugin is seeking a maintainer as the core team does not use this**

## Usage

To start an instarepl, run the command `Instarepl: Open a clojure instarepl`. A tab will pop up
in which to type and evaluate expressions. To toggle the continuous live evaluation, run the command
`Instarepl: Toggle live mode`.


## License

Distributed under the MIT License, see LICENSE.md for the full text.

## For Committers

This plugin consists of two parts, the LightTable plugin with its code under src/ and
an nrepl client library that provides instarepl functionality and lives under lein-light-nrepl-instarepl/.
The nrepl client library is a clojar that is currently pulled in by the Clojure plugin's standalone runner.
This is for convenience i.e. to not require a remote nrepl client. This may change later.
When changes are made to lein-light-nrepl-instarepl/, a new version of the clojar should be released and the
version should be updated in [the Clojure plugin](https://github.com/LightTable/Clojure/blob/0b3ce4cf812ee270ba34ebd7f105f0249c9ee666/runner/src/leiningen/light_nrepl.clj).

