from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Boolean, DECIMAL
from databases.db import Base


class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String, nullable=False, index=True,  unique=True)
    first_nane = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    full_nane = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    role_id =  Column(Integer, ForeignKey('role.id'), nullable=False)
    create_date = Column(DateTime, nullable=False)
    update_date = Column(DateTime, nullable=True, default=None)
    role = relationship('role', lazy = 'noload', foreign_keys=[role_id])