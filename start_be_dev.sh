  
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

echo "migrations generate ..."
alembic -c ./databases/migrations/alembic.ini revision --autogenerate -m 'Auto migration'

echo "migrations upgrade on db ..."
alembic -c ./databases/migrations/alembic.ini  upgrade head

echo "starting ..."

python3 main.py
echo "completed"