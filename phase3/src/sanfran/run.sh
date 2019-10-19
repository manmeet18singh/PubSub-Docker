docker stop sanbread
docker rm sanbread
docker build -t sanbread .
docker run --name sanbread -v /Users/manmeetsingh/Desktop/486-project2/phase3/src:/bread -p 8084:8077 -d sanbread
