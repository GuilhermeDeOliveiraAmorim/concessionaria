from fastapi import APIRouter, Depends
from ..utils.hashing import Hash
from ..schemas.user import AddUser
from ..models import User
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(
    prefix='/api/users',
    tags=['Users']
)


@router.post('/')
def add_user(request: AddUser, db: Session = Depends(get_db)):
    user = User(email=request.email,
                password=request.password)
    db.add(user)
    db.commit()
    db.refresh(user)

    return user


@router.get('/{user_id}')
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).get(user_id)
    return user
