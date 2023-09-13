# module-federation-demo

## Ports

* dealing-app = 6001
* dealing-dealings = 6002
* dealing-instruments = 6003
* dealing-prepare = 6004
* step-common-header = 6005

## Running locally

```
cd step-common-header
npm run build
npm run serve
cd ..
cd dealing-app
npm run dev
firefox http://localhost:6001
```