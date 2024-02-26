from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class Receita(BaseModel):
    titulo:str
    incredientes:str
    intrucoes:str
    
@app.post('/receitas/')
def criar_Receita(receita: Receita):
    '''
    Adcionar logica para adicionar a receita
    '''
    return {"message":"Receita adicionada com sucesso"}