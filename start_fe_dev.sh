#! sh

echo "kill service"
try
(  
    echo "kill backend ..."
    sudo kill -9 $(sudo lsof -t -i:8081)
    echo "completed"
)

echo "goto frontend ..."
cd frontend
echo "starting ..."
npm start
echo "completed"