from fastapi import FastAPI
from app.api.routes import user, cars, sales, sellers
from app.api.database import Base, engine
from fastapi.middleware.cors import CORSMiddleware

from backend.app.api.routes import cars, sales, sellers, user

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://172.17.0.1:3000",
    "http://172.17.0.1:8000",
    "http://frontend:3000",
    "http://backend:8000",
]

app = FastAPI(docs_url='/api/docs', openapi_url='/api/openapi.json')

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(engine)

app.include_router(sellers.router)
app.include_router(cars.router)
app.include_router(sales.router)
app.include_router(user.router)
