#! sh

echo "kill service"
try
(  
    echo "kill backend ..."
    sudo kill -9 $(sudo lsof -t -i:8081)
    echo "completed"
)

echo "goto backend ..."
cd backend/app

echo "starting ..."

python3 main.py
echo "completed"