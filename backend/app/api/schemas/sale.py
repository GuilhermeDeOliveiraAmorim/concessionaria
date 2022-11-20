from pydantic import BaseModel


class AddSale(BaseModel):
    car_id: int
    seller_id: int
    is_available: bool

    class Config():
        orm_mode = True


class ViewSale(BaseModel):
    car_id: int
    seller_id: int
    is_available: bool

    class Config():
        orm_mode = True
