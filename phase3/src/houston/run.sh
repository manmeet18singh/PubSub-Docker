docker stop housbread
docker rm housbread
docker build -t housbread .
docker run --name housbread -v /Users/manmeetsingh/Desktop/486-project2/phase3/src:/bread -p 8083:8078 -d housbread
