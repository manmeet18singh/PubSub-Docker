docker stop buffbread
docker rm buffbread
docker build -t buffbread .
docker run --name buffbread -v /Users/manmeetsingh/Desktop/486-project2/phase3/src:/bread -p 8082:8079 -d buffbread
