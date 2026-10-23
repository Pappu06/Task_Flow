from fastapi import FastAPI
from mockData import products
from dtos import new_item

app = FastAPI()

@app.get("/")
def home():
    return "Welcome to fastApi..."

@app.get("/contact")
def contact():
    return "Contact Us any time..."

# Query parameter
@app.get("/user")
def user(user:str):
    return {
        "great": f"hello {user}, Hows you ?"
    }

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

# creating new product 
@app.post("/create_products")
def new_product(item:new_item):
    item = item.model_dump()
    products.append(item) 
    return {"product created successfully" :products}

# Update exiting product
@app.put("/update_product/{product_id}")
def update_product(item:new_item, product_id:int):

    for index, one_Product in enumerate(products):
        if one_Product.get("id") == product_id:
            products[index] = item.model_dump()
            return  {"status":"Product updated successfully", "product":item}   
        
    return{
        "error":"Product not found for thi ID"
    }
    
    
# Delete product
@app.delete("delete_product/{product_id}")
def delete_product(product_id:int):
    for index, one_Product in enumerate(products):
        if one_Product.get("id") == product_id:
            deleted_product = products.pop(index)
            return {"status":"Product deleted successfully", "product":delete_product}  
            
    return{
        "error":"Product not found for thi ID"
    } 
     