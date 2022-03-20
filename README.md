Simple Node app to scale apllications using the cluster module

If dont have multi core CPU can harcode 2 for cero downtime

Tested with loadtest from npm

loadtest -n 10000 -c 1001 http://localhost:3000

Total time: 5.4691s

Request per second: 1828