
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from datetime import datetime
from sqlalchemy import func, DateTime

import datetime

from sqlalchemy import create_engine

engine = create_engine("sqlite:///receipts.db")  

class Base(DeclarativeBase):
    pass

class receipt(Base):
    __tablename__ = "receipts"
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    item: Mapped[String] = mapped_column(String(30))
    price: Mapped[int] = mapped_column()
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    
