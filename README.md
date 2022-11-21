# Concessionária

Vídeo explicativo: https://www.loom.com/share/1f65d1a39179479a9b7d5eaff9696f33

Para inicializar o projeto:

```bash
# na raiz do projeto
source venv/bin/activate

# em concessionaria/frontend
npm i

npm run dev

#em concessionaria/backend
uvicorn app.main:app --reload
```
Abra http://localhost:3000 para o frontend

O backend fica em http://127.0.0.1:8000

No link http://127.0.0.1:8000/api/docs você tem acesso ao swagger da API

Será necessário cadastrar um usuário na rota http://127.0.0.1:8000/api/docs#/Users/add_user_api_users__post
