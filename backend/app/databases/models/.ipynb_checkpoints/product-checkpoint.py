from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Boolean, DECIMAL
from databases.db import Base


class Product(Base):
    __tablename__ = "product"
    id = Column(Integer, primary_key=True, index=True)
    code = Column(Integer, nullable=False, index=True)
    name = Column(String, nullable=False)
    description =  Column(String, nullable=True, default=None)
    import_price = Column(DECIMAL, nullable=False)
    number_of_goods_in_stock = (Integer, nullable=False, defaut=0)
    sale_price = Column(DECIMAL, nullable=True, default=None)
    sale_point = Column(DECIMAL, nullable=True, default=None)
    hot_point = Column(DECIMAL, nullable=True, default=None)
    industry_id = Column(Integer, ForeignKey('industry.id'), nullable=False)
    description = Column(String, nullable=True, default=None)
    create_date = Column(DateTime, nullable=False)
    update_date = Column(DateTime, nullable=True, default=None)
    industry = relationship('industry', lazy = 'noload', foreign_keys=[industry_id])
