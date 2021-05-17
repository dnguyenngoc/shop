from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Boolean, DECIMAL
from databases.db import Base

class Industry(Base):
    __tablename__ = "industry"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(Integer, nullable=False, index=True)
    description = Column(String, nullable=True, default=None)
    hot_point = Collum(DECIMAL, nullable=True, default=None)
    create_date = Column(DateTime, nullable=False)
    update_date = Column(DateTime, nullable=True, default=None)

