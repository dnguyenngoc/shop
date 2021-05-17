import os

# PROJECT INFO
PROJECT_NAME = 'APOT SHOP'
ENVIRONMENT = os.getenv('ENVIRONMENT')
HOST_NAME = 'www.apotshop.vn'
DATABASE_SCHEMA = 'shop'

if ENVIRONMENT == 'staging':
    SQLALCHEMY_DATABASE_URL = "postgresql://apot:1q2w3e4r@161.117.87.31:5432/apot"
    
    FTP_USERNAME = 'pot'
    FTP_PASSWORD = 'D@123123'
    FTP_URL = '161.117.87.31'
    FTP_PORT = 21

    FE_HOST = '161.117.87.31'
    FE_PORT = 8080
    BE_HOST = '161.117.87.31'
    BE_PORT = 8081
    
