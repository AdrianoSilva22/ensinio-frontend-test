<h1>Entendendendendo decisões arquiteturais e a estrutura do projeto<h1/>

<p>Requisitos para rodar o projeto

Setup de ambiente:

-nodejs : https://nodejs.org/en/download

Como rodar na minha máquina?

clone o projeto: 
git clone https://github.com/AdrianoSilva22/ensinio-frontend-test.git

Rode npm install

Rode npm run dev <p/>

<h1>techguide.sh site<h1/>

<p>Estrutura do Projeto
Visão Geral:
O projeto segue uma estrutura organizada com várias pastas, cada uma com um propósito específico:

Estrutura de Pastas
src:
Pasta raiz do projeto, contendo todo o código-fonte do aplicativo.

app:
Contém as principais funcionalidades do aplicativo.

components: Armazena componentes reutilizáveis do React.

contexts: Guarda contextos usados para compartilhar informações globalmente.

images: Contém imagens e recursos gráficos.

lib: Armazena utilitários ou bibliotecas personalizadas.

locale: Usado para armazenar arquivos de tradução em aplicativos multilíngues.

models: Contém definições de modelos ou tipos de dados usados no aplicativo.

service: Mantém serviços ou módulos para interagir com APIs e executar lógica de negócios.

styles: Armazena arquivos de estilo, como CSS.<p/>


<h1>Tecnologias Utilizadas no Projeto:<h1/>
    
<p>Este projeto utiliza TypeScript e Next.js para fornecer um ambiente de desenvolvimento minimizando erros, maximinizando produtividade, tendo eficiente.

TypeScript: TypeScript é um superset de JavaScript que adiciona tipos estáticos ao código, melhorando a qualidade e segurança do mesmo.

Next.js: Next.js é um framework React que oferece recursos de servidor, geração estática e muito mais para criar aplicativos web de alto desempenho.

Internacionalização (i18n)
A aplicação é internacionalizada para suportar vários idiomas, utilizando a biblioteca i18n. Abaixo está um exemplo de código:

import enTranslation from '@/locale/en.json';
import esTranslation from '@/locale/es.json';
import ptTranslation from '@/locale/pt.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        pt: { ...ptTranslation },
        en: { ...enTranslation },
        es: { ...esTranslation },
    },
    lng: 'pt',
});
Neste exemplo, o i18n é configurado com traduções em português (pt), inglês (en) e espanhol (es). Os arquivos de tradução podem ser personalizados em src/locale para adicionar mais idiomas ou atualizar as traduções existentes. <p/>

<h1>Json Server:<h1/>
    
<p>Utilização de um Servidor JSON e Dados da API Falsa
Para testar e simular uma API em ambiente de desenvolvimento, utilizamos um servidor JSON. Abaixo estão exemplos de dados da API falsa:

{
  "items": [
    {
      "id": 1,
      "title": {
        "pt": "Trilhas de etapas",
        "en": "Step trails",
        "es": "Caminos de etapa"
      },
      "description": {
        "pt": "Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.",
        "en": "Create study plans by specifying classes or courses and defining the order in which your students should study.",
        "es": "Crea planes de estudio especificando clases o cursos y definiendo el orden en el que tus alumnos deben estudiar."
      }
    },
  ]
}

Para utilizar um servidor JSON e esses dados de API falsa, siga os seguintes passos:

Instalação do JSON Server: Instale o JSON Server globalmente executando o comando
npm install -g json-server
Criação de um arquivo de configuração JSON: Crie um arquivo db.json com os dados da API falsa, como exemplificado acima.
Iniciar o JSON Server: Execute o JSON Server apontando para o arquivo db.json:
json-server --watch db.json --port 3001
Realização de Requisições à API Falsa: A API falsa estará disponível em http://localhost:3001. Faça requisições HTTP para essa URL para obter dados como se fossem de uma API real.<p/>

o projeto está hospedado na plataforma : ...
o link:


