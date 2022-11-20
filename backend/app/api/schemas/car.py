from pydantic import BaseModel


class AddCar(BaseModel):
    make: str
    model: str
    transmission: str
    year: int
    value: float

    class Config():
        orm_mode = True


class ViewCar(BaseModel):
    id: int
    make: str
    model: str
    transmission: str
    year: int
    value: float
    is_available: int

    class Config():
        orm_mode = True
