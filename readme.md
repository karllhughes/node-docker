# Node Twitter Docker - Answer Key
No peaking! 👀

## Challenge 1

Part 1
```
docker run --name=harry -d alpine tail -f /dev/null
```

Part 2 - 6
```
docker ps

docker logs harry (-f)

docker exec harry echo "Hello"

docker inspect harry

docker rm -f harry
OR
docker stop harry && docker rm harry
```

Part 7 - 9
```
docker run -it -w /home -e HELLO_WORLD="Hey World" --rm ubuntu bash

root@ac8014cd8a13:/home# echo $HELLO_WORLD

> Hey World

root@ac8014cd8a13:/home# exit
```

Part 10
```
docker run node:10 node -v
docker run node:8 node -v
```

Part 11
```
docker run -v `pwd`:`pwd` -w `pwd` node:10 node hello.js
```

## Challenge 2
TBD

## Challenge 3
TBD

## Challenge 4
TBD

## Challenge 5
TBD

## Challenge 6
TBD

## Challenge 7
TBD

