from typing import List
from fastapi import APIRouter, Depends

from ..schemas.sale import AddSale, ViewSale
from ..models import Sale, Car
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(
    prefix='/api/sales',
    tags=['Sales']
)


@router.post('/')
def add_sale(request: AddSale, db: Session = Depends(get_db)):
    car_id = request.car_id

    sales = db.query(Sale).filter(
        Sale.car_id == car_id).count()

    if (sales > 0) == False:
        sale = Sale(**request.dict())
        db.add(sale)
        db.commit()
        db.refresh(sale)

        car = db.query(Car).get(car_id)

        carUpdate = {
            "id": car_id,
            "make": car.make,
            "model": car.model,
            "transmission": car.transmission,
            "year": car.year,
            "value": car.value,
            "is_available": 0
        }

        print(carUpdate)

        db.query(Car).filter(Car.id == car_id).update(carUpdate)
        db.commit()

        return sale

    return "Carro não disponível"


@router.get('/', response_model=List[ViewSale])
def get_sales(db: Session = Depends(get_db)):
    sales = db.query(Sale).all()
    return sales


@router.get('/{sale_id}', response_model=ViewSale)
def get_sales(sale_id: int, db: Session = Depends(get_db)):
    sale = db.query(Sale).get(sale_id)
    return sale


# @router.delete('/{genre_in_movie_id}')
# def deletar_genero_do_filme(genre_in_movie_id: int, db: Session = Depends(get_db)):
#     db.query(GenreInMovie).filter(GenreInMovie.id == genre_in_movie_id).update(
#         synchronize_session=False)
#     db.commit()

#     return "Gênero deletado com sucesso!"
