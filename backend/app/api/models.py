from .database import Base
from sqlalchemy import Float, ForeignKey, Boolean, String, Column, Integer, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    password = Column(String)
    is_available = Column(Integer, default=1)


class Seller(Base):
    __tablename__ = "sellers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    is_available = Column(Integer, default=1)


class Car(Base):
    __tablename__ = "cars"
    id = Column(Integer, primary_key=True, index=True)
    make = Column(String)
    model = Column(String)
    transmission = Column(String)
    year = Column(Integer)
    value = Column(Float)
    is_available = Column(Integer, default=1)


class Sale(Base):
    __tablename__ = "sales"
    id = Column(Integer, primary_key=True, index=True)
    is_available = Column(Integer, default=1)
    sold_in = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    car_id = Column(Integer, ForeignKey(
        "cars.id", ondelete="SET NULL"), nullable=True)
    seller_id = Column(Integer, ForeignKey(
        "sellers.id", ondelete="SET NULL"), nullable=True)

    car = relationship("Car", foreign_keys=[car_id])
    seller = relationship("Seller", foreign_keys=[seller_id])
