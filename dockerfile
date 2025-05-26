# Usa imagem leve do Node
FROM node:18-alpine

# Cria o diretório da aplicação
WORKDIR /app

# Copia todos os arquivos para dentro do container
COPY . .

# Instala as dependências
RUN npm install

# Compila o Strapi para produção
RUN npm run build

# Expõe a porta padrão do Strapi
EXPOSE 1337

# Inicia o Strapi
CMD ["npm", "run", "start"]
