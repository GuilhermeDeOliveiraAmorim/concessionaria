from http.client import HTTPException
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status

from ..schemas.car import AddCar, ViewCar
from ..models import Car
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(
    prefix='/api/cars',
    tags=['Cars']
)


@router.get('/', response_model=List[ViewCar])
def get_cars(db: Session = Depends(get_db)):
    cars = db.query(Car).all()
    return cars


@router.post('/')
def add_car(request: AddCar, db: Session = Depends(get_db)):
    car = Car(**request.dict())
    db.add(car)
    db.commit()
    db.refresh(car)

    return car


@router.get('/{car_id}')
def get_car(car_id: int, db: Session = Depends(get_db)):
    car = db.query(Car).get(car_id)
    return car


@router.put('/{car_id}')
def delete_car(request: AddCar, car_id: int, db: Session = Depends(get_db)):

    print(request)

    db.query(Car).filter(Car.id == car_id).update(request.dict())
    db.commit()

    return "Carro deletado com sucesso!"
