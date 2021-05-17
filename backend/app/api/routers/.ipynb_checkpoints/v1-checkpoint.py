from fastapi import APIRouter

from api.resources import test_v1


router = APIRouter()

router.include_router(test_v1.router, prefix="/test", tags=["test v1"])
