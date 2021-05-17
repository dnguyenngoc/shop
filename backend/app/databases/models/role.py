from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Boolean, DECIMAL
from databases.db import Base


class Role(Base):
    __tablename__ = "role"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(Integer, nullable=False, index=True)
    create_date = Column(DateTime, nullable=False)
    update_date = Column(DateTime, nullable=True, default=None)
