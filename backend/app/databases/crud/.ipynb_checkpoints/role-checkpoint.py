from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
from fastapi.encoders import jsonable_encoder
from databases.models import Role


def create(db_session: Session, create) -> Role:
    data = Role(**create.dict())
    db_session.add(data)
    db_session.commit()
    db_session.refresh(data)
    return data


def read(db_session: Session, id: int) -> Role:
    return db_session.query(Role).filter(Role.id == id).first()


def update(db_session: Session, id: int, update) -> Role:
    update = db_session.query(Role).filter(Role.id == id).update(update, synchronize_session='evaluate')
    db_session.commit()
    return update


def delete(db_session: Session, id: int) -> Role:
    query = db_session.query(Role).filter(Role.id == id).first()
    db_session.delete(query)
    db_session.commit()
    return query

