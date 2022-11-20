from http.client import HTTPException
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import null
from ..schemas.seller import AddSeller, ViewSeller
from ..models import Seller
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(
    prefix='/api/sellers',
    tags=['Seller']
)


@router.get('/')
def get_sellers(db: Session = Depends(get_db)):
    sellers = db.query(Seller).all()
    return sellers


@router.post('/')
def add_seller(request: AddSeller, db: Session = Depends(get_db)):
    seller = Seller(**request.dict())
    db.add(seller)
    db.commit()
    db.refresh(seller)

    return seller


@ router.get('/{seller_id}')
def get_seller(seller_id: int, db: Session = Depends(get_db)):
    seller = db.query(Seller).get(seller_id)
    return seller


@ router.put('/{seller_id}')
def update_seller(request: AddSeller, seller_id: int, db: Session = Depends(get_db)):

    db.query(Seller).filter(Seller.id == seller_id).update(request.dict())
    db.commit()

    return "Vendedor atualizado com sucesso!"
