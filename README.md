# Bot para Capturar file_id de Imagens no Telegram

🖼️ O que é o File ID Capture Bot?
O File ID Capture Bot é um bot criado para capturar o file_id de imagens enviadas no Telegram. O file_id é um identificador exclusivo usado para reutilizar fotos já enviadas em bots, sem precisar de links externos ou recarregar a imagem toda vez.

💡 Para que serve?
Se você tem um bot que envia produtos com imagem (como o Muleke das Promos), o file_id é a forma mais leve e rápida de exibir essas fotos diretamente no Telegram. Com ele:

A imagem carrega mais rápido

O envio é mais estável

Você não precisa hospedar imagens em outro site

⚙️ Como funciona?
Você inicia o bot no Telegram.

Envia uma imagem como foto (não como arquivo).

O bot responde com o file_id da imagem.

Você copia esse file_id e usa em qualquer outro bot para enviar essa mesma imagem.

✅ Vantagens de usar file_id
Reduz o consumo de dados

Evita links quebrados

Funciona mesmo se a imagem original for apagada

Ideal para bots que enviam produtos, promoções, catálogos, menus, etc.

## Como usar

1. Instale as dependências:
```
npm install
```

2. Crie um arquivo `.env` com o token do seu bot:
```
TELEGRAM_BOT_TOKEN=SEU_TOKEN_AQUI
```

3. Rode o bot:
```
npm start
```

4. Envie uma imagem para o bot e ele vai responder com o file_id.
