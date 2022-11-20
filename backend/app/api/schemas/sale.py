from pydantic import BaseModel
from datetime import datetime

from ..schemas.car import ViewCar
from ..schemas.seller import ViewSeller


class AddSale(BaseModel):
    car_id: int
    seller_id: int

    class Config():
        orm_mode = True


class ViewSale(BaseModel):
    id: int
    car_id: int
    seller_id: int
    created_at: datetime
    is_available: int
    car: ViewCar
    seller: ViewSeller

    class Config():
        orm_mode = True
