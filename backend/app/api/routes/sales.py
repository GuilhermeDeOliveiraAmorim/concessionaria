from typing import List
from fastapi import APIRouter, Depends

from ..schemas.sale import AddSale, ViewSale
from ..models import Sale
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(
    prefix='/api/sales',
    tags=['Sales']
)


@router.post('/')
def add_sale(request: AddSale, db: Session = Depends(get_db)):
    sale = Sale(**request.dict())
    db.add(sale)
    db.commit()
    db.refresh(sale)

    return sale


@router.get('/{sale_id}', response_model=List[ViewSale])
def get_sales(sale_id: int, db: Session = Depends(get_db)):
    sales = db.query(Sale).filter(
        Sale.sale_id == sale_id).all()
    return sales


# @router.delete('/{genre_in_movie_id}')
# def deletar_genero_do_filme(genre_in_movie_id: int, db: Session = Depends(get_db)):
#     db.query(GenreInMovie).filter(GenreInMovie.id == genre_in_movie_id).update(
#         synchronize_session=False)
#     db.commit()

#     return "Gênero deletado com sucesso!"
