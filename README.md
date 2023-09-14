### Requisito

Certifique-se de ter o Git, Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema. Você pode verificar se eles estão instalados executando os seguintes comandos no seu terminal:

        git -v
        node -v
        npm -v

**Passo 1:** Clone o repositório do projeto

Abra seu terminal e navegue até a pasta onde deseja clonar o projeto React Native. Em seguida, execute o seguinte comando para clonar o repositório do projeto:

git clone https://github.com/seu-usuario/projeto-react-native.git

Substitua `https://github.com/seu-usuario/projeto-react-native.git` pelo URL do repositório real que você deseja clonar.

**Passo 2:** Navegue até a pasta do projeto

Após o clone ser concluído, navegue até a pasta do projeto React Native usando o seguinte comando:

        cd projeto-react-native

**Passo 3:**  Instale as dependências do projeto

Dentro da pasta do projeto, você deve instalar todas as dependências listadas no arquivo `package.json`. Execute o seguinte comando para fazer isso:

        npm install

Isso instalará todas as bibliotecas e pacotes necessários para o projeto.

**Passo 4:** Inicie o aplicativo React Native

Depois de concluir a instalação das dependências, você pode iniciar o aplicativo React Native. Certifique-se de que seu dispositivo ou emulador esteja pronto. Você pode iniciar o aplicativo usando o seguinte comando:

        npx expo start

Isso iniciará o aplicativo em seu dispositivo ou emulador.

Agora, você deve ter o projeto React Native instalado e em execução em seu dispositivo ou emulador. Você pode começar a fazer alterações no código-fonte e ver as atualizações em tempo real.

**Passo 5:** Instale o JSON Server
Abra o seu terminal e execute o seguinte comando para instalar o JSON Server globalmente no seu sistema:

        npm install -g json-server

**Passo 6:**  Inicialize o JSON Server

Abra o seu terminal na raiz do projeto e execute o seguinte comando para inicializar o JSON Server no IP e porta corretos. Lembre-se de substituir `192.168.1.6` pelo seu próprio endereço IP. Se você não souber qual é o seu IP, você pode executar o comando `ipconfig` no CMD da sua máquina e pegar o endereço IPv4:

        json-server --watch db.json --host SEU_IP --port 3333


**Passo 7:**  Alterar o IP do APP

No arquivo `src\services\api.js`, localize a linha que contém o seguinte código:
baseURL: "http://192.168.1.6:3333", e substitua o IP pelo seu
