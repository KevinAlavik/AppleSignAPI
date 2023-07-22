# AppleSignAPI
Some code to get you started on to making your own signing api
## What is this?
This is like a chalenge for those who are trying to make their own apple code sign api.
## More info
This repository contains all of the needed files (not all of the code) to make a signing api in typescript.
## Testing
run `npm run dev` to start the api
## Result
The result should be a working api on port `5354`
## How it should be on the end...
You should be able to put in these parameters:
| Parameter | Function |
|-----------|----------|
| ipa       | The file to sign |
| p12       | The p12 to sign with |
| mp        | The mobileprovision to sign with |
| pass      | The password for the p12 |

Example: `127.0.0.1:5354/?ipa=example.com/example.ipa&p12=example.com/example.p12&mp=example.com/example.mp&pass=123`
## Extra Points
If you get `dylib, name, bundleid, version, icon` parameters to work thats awesome. Functions and files will be availible for help

Show me your result on my [twitter](https://twitter.com/pufferisadev)
