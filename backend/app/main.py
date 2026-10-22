from fastapi import FastAPI

app = FastAPI(
    title="TaskFlow API",
    description="API for the TaskFlow project management system",
    version="1.0.0",
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to TaskFlow API",
        "status": "running",
    }


@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "TaskFlow API",
    }