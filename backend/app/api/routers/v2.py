from fastapi import APIRouter

from api.resources import test_v2


router = APIRouter()

router.include_router(test_v2.router, prefix="/test", tags=["test v2"])
