from fastapi import FastAPI
from mockData import products

app = FastAPI()

@app.get("/")
def home():
    return "Welcome to fastApi..."

@app.get("/contact")
def contact():
    return "Contact Us any time..."


@app.get("/products")
def get_product():
    return products


# path parameter
@app.get("/product/{product_id}")
def get_one_product(product_id:int):
    for oneProduct in products:
        if oneProduct.get("id") == product_id:
            return oneProduct

    return {
        "error": "product not found" 
    }        


# Query parameter
@app.get("/user")
def user(user:str):
    return {
        "great": f"hello {user}, Hows you ?"
    }