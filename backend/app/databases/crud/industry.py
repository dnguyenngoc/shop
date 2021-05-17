from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
from fastapi.encoders import jsonable_encoder
from databases.models import Industry


def create(db_session: Session, create) -> Industry:
    data = Industry(**create.dict())
    db_session.add(data)
    db_session.commit()
    db_session.refresh(data)
    return data


def read(db_session: Session, id: int) -> Industry:
    return db_session.query(Industry).filter(Industry.id == id).first()


def update(db_session: Session, id: int, update) -> Industry:
    update = db_session.query(Industry).filter(Industry.id == id).update(update, synchronize_session='evaluate')
    db_session.commit()
    return update


def delete(db_session: Session, id: int) -> Industry:
    query = db_session.query(Industry).filter(Industry.id == id).first()
    db_session.delete(query)
    db_session.commit()
    return query

