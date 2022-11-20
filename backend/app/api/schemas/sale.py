from pydantic import BaseModel


class AddSale(BaseModel):
    car_id: int
    seller_id: int

    class Config():
        orm_mode = True


class ViewSale(BaseModel):
    car_id: int
    seller_id: int

    class Config():
        orm_mode = True
