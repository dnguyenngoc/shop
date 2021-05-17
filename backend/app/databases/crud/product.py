from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
from fastapi.encoders import jsonable_encoder
from databases.models import Product


def create(db_session: Session, create) -> Product:
    data = Product(**create.dict())
    db_session.add(data)
    db_session.commit()
    db_session.refresh(data)
    return data


def read(db_session: Session, id: int) -> Product:
    return db_session.query(Product).filter(Product.id == id).first()


def update(db_session: Session, id: int, update) -> Product:
    update = db_session.query(Product).filter(Product.id == id).update(update, synchronize_session='evaluate')
    db_session.commit()
    return update


def delete(db_session: Session, id: int) -> Product:
    query = db_session.query(Product).filter(Product.id == id).first()
    db_session.delete(query)
    db_session.commit()
    return query

