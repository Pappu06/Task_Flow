from pydantic import BaseModel

class new_item(BaseModel):
    id:int 
    name:str
    inStock: int