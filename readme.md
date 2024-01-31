http://192.168.62.101:9090/targets?search=

http://192.168.62.101:3000/dashboards


http://192.168.62.101:8081/metrics

http://192.168.62.101:8082/metrics

# docker
http://192.168.62.101:9323/metrics


# public
http://192.168.62.101:3000/d/fb74ba24-e2a8-410b-9e60-f8711a77e0e0/combo?orgId=1&from=1706566567906&to=1706609767906


postgres exporter

problem:            
The PostgreSQL Exporter primarily focuses on exporting metrics related to the performance and state of a PostgreSQL database, rather than exporting the actual table data. Exporting table data is not a typical use case for monitoring tools like Prometheus and the associated exporters.
```
192.168.62.101
8083
user : postgres
password:  example

psql -h 127.0.0.1 -p 8083 -U postgres
psql "postgresql://postgres:example@192.168.62.101:8083"
```