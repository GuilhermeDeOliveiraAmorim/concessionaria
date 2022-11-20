from pydantic import BaseModel


class AddSeller(BaseModel):
    name: str

    class Config():
        orm_mode = True


class ViewSeller(BaseModel):
    id: int
    name: str

    class Config():
        orm_mode = True
