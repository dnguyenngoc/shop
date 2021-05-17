from fastapi import APIRouter
from fastapi import Depends
from databases.db import get_db
from sqlalchemy.orm import Session


router = APIRouter()



@router.get("/test/hellow")
def hello():
    return "hello all!"

@router.get("/test/db")
def test_db(
    *, 
    db_session: Session = Depends(get_db), 
):
    return "LLL"