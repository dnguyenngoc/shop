# Python class represent the entities
from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from decimal import Decimal


class Token(BaseModel):
    token_type: Optional[str] = 'bearer'
    access_token: Optional[str]
    refresh_token: Optional[str]
    expire_token: Optional[datetime]
    expire_refresh_token: Optional[datetime]


class TokenCreate(BaseModel):
    user_id: Optional[int]
    user_name: Optional[str]
    email: Optional[str]
    role_id: Optional[int]
    role_name: Optional[str]

class TokenPayload(BaseModel):
    user_id: Optional[int]
    user_name: Optional[str]
    email: Optional[str]
    role_id: Optional[int]
    role_name: Optional[str]