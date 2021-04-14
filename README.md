## Iniciar tsconfig

```
npx tsc --init --rootDir src --outdir build --lib dom,es6 --module commonjs --removeComments --target es6
```

## Instalaciones necesarias proyecto

Lista de dependencias que necesitaremos para trabajar en este
proyecto:

- express
- express-graphql
- graphql
- graphql-import-node
- compression
- cors
- typescript
- graphql-tools
- graphql-playground-middleware-express

### Dependencias de producción:

```
npm install express express-graphql graphql ncp http graphql-import-node compression cors typescript graphql-tools graphql-playground-middleware-express ts-node
```

### Dependencias de desarrollo:

```
npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql -D
```

## Scripts

```json
"start": "node build/server.js",
"build": "tsc -p . && ncp src/schema build/schema",
"start:dev": "npm run build:dev",
"build:dev": "nodemon 'src/server.ts' --exec 'ts-node' src/sercer.ts -e ts,graphql"
```
