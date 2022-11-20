from pydantic import BaseModel


class AddCar(BaseModel):
    make: str
    model: str
    transmission: str
    year: int
    is_available: bool

    class Config():
        orm_mode = True


class ViewCar(BaseModel):
    id: int
    make: str
    model: str
    transmission: str
    year: int
    is_available: bool

    class Config():
        orm_mode = True
