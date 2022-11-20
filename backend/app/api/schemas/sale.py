from pydantic import BaseModel


class AddSale(BaseModel):
    car_id: int
    saller_id: int

    class Config():
        orm_mode = True


class ViewSale(BaseModel):
    car_id: int
    saller_id: int

    class Config():
        orm_mode = True
