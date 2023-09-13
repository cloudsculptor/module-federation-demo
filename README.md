# module-federation-demo

## Ports

* dealing-app = 6000
* dealing-dealings = 6001
* dealing-instruments = 6002
* dealing-prepare = 6003
* step-common-header = 6004

## Running locally

```
cd step-common-header
npm run build
npm run serve
cd ..
cd dealing-instruments
npm run dev
firefox http://localhost:6002
```