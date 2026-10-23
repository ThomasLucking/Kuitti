from sqlalchemy import insert
from sqlalchemy.orm import Session

from db import Base, engine, receipt

Base.metadata.create_all(engine)

with Session(engine) as session:
    session.execute(
        insert(receipt),
        [
            {"item": "Coffee", "price": 4},
            {"item": "Sandwich", "price": 9},
            {"item": "Groceries", "price": 56},
            {"item": "Train ticket", "price": 12},
            {"item": "Book", "price": 18},
        ],
    )
    session.commit()
