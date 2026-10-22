from fastapi import FastAPI

app = FastAPI(title="Scry")


@app.get("/health")
def health():
    return {"status": "ok"}
