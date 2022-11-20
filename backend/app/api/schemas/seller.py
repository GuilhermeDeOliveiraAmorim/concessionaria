from pydantic import BaseModel


class AddSeller(BaseModel):
    name: str
    is_available: bool

    class Config():
        orm_mode = True


class ViewSeller(BaseModel):
    id: int
    name: str
    is_available: bool

    class Config():
        orm_mode = True
