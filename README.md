# module-federation-demo

## Ports

* dealing-app = 6001
* dealing-dealings = 6002
* dealing-instruments = 6003
* dealing-prepare = 6004
* step-common-header = 6005

## Running locally

```
# Make `STEP common header` available via module federation
cd module-federation-demo/step-common-header
npm install
npm run build
npm run serve
# ( Outputs to: http://localhost:6005/assets/remoteEntry.js )

# Make `Dealings component` available via module federation
cd module-federation-demo/dealing-dealings
npm install
npm run build
npm run serve
# ( Outputs to: http://localhost:6002/assets/remoteEntry.js )

# Run the app
cd module-federation-demo/dealing-app
npm install
npm run dev
firefox http://localhost:6001
```