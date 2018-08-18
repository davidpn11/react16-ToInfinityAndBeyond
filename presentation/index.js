// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  CodePane,
  Link,
  Fill,
  Fit,
  Layout
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import profile from "../assets/profile.jpg";
// Require CSS
require("normalize.css");
import "./codeSlide.css";
const images = {
  reactLogo: require("../assets/react-logo.png"),
  infinty: require("../assets/infinity.gif"),
  twitterLogo: require("../assets/twitter-logo.svg"),
  githubLogo: require("../assets/github.svg"),
  blinking: require("../assets/blinking.gif"),
  oh: require("../assets/oh.gif"),
  nooo: require("../assets/nooo.gif"),
  cant_believe: require("../assets/cant_believe.gif"),
  fine: require("../assets/fine.gif"),
  reactSize: require("../assets/reactSize.png"),
  portalDiagram: require("../assets/portal-diagram.svg"),
  lifecycleOld: require("../assets/lifecycle_old.png"),
  lifecycleNew: require("../assets/lifecycle_new.png"),
  sync: require("../assets/sync.gif"),
  async: require("../assets/async.gif"),
  after: require("../assets/after.gif"),
  suspense: require("../assets/suspense.gif"),
  suspense2: require("../assets/suspense2.gif"),
  suspense3: require("../assets/suspense3.gif"),
  haters: require("../assets/haters.gif"),
  thanks: require("../assets/thanks.gif")
};

const codesandboxStyle = {
  width: "100%",
  height: "70vh",
  border: 0,
  borderRadius: "4px",
  overflow: "hidden"
};

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    grayBg: "#37474F",
    whitesmoke: "whitesmoke",
    dark: "#111",
    codeBg: "#2a2734",
    codeSlideBg: "#122b45"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);
const code = require("../assets/code/code");
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {/* PRESENTATION SLIDE */}
        <Slide bgColor="dark">
          <Image width="20%" src={images.reactLogo} />
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            color="whitesmoke"
            textFont="primary"
          >
            React 16
          </Heading>
          <Text size={2} textColor="primary">
            Ao infinito e além
          </Text>
          <Image width="20%" src={images.infinty} />
        </Slide>
        {/* Slide pessoal */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image
                height={300}
                width={300}
                src={profile}
                fit
                size={1}
                style={{ borderRadius: "100%" }}
              />
            </Fill>
            <Fill>
              <Heading size={1} fit lineHeight={1} textColor="tertiary">
                $ whoami
              </Heading>
              <Heading size={2} fit caps lineHeight={1} textColor="secondary">
                David Nascimento
              </Heading>
              <List style={{ fontSize: "10px" }}>
                <ListItem>Take - BLiP</ListItem>
                <ListItem>Front End</ListItem>
              </List>
            </Fill>
          </Layout>
          <Link href="https://github.com/davidpn11" target="_blank">
            <Text textColor="accent" style={{ textAlign: "center" }}>
              <Image
                src={images.githubLogo}
                style={{ height: 50, margin: "0 0 10 0" }}
              />
              @davidpn11
            </Text>
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="grayBg">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            O que é React?
          </Heading>
        </Slide>
        {/* BUZZZ BLINKING */}
        <Slide bgColor="dark">
          <Image src={images.blinking} />
        </Slide>

        {/* <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/firstReact.example")}
          /> */}
        {/* INTRO REACT */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            React é:
          </Heading>
          <List>
            <ListItem>Framework JS</ListItem>
            <ListItem>Baseado em componentes</ListItem>
            <ListItem>State (dados próprios) e Props(dados recebidos)</ListItem>
            <ListItem>Transferência de dados unidirecional (Flux)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Dissecando um component react
          </Heading>
        </Slide>
        <CodeSlide
          theme={theme}
          bgColor="codeSlideBg"
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/firstReact.example")}
          // code={code}
          ranges={[
            { loc: [0, 50], title: "Primeiro Componente" },
            { loc: [0, 2], note: "Imports de react e react-dom" },
            { loc: [3, 4], note: "Utiliza ES6 classes" },
            { loc: [6, 10], note: "Iniciando o estado do componente" },
            { loc: [10, 11], note: "Fazendo o bind de uma função" },
            { loc: [24, 36], title: "método render() " },
            { loc: [24, 36], note: "" },
            { loc: [26, 35], note: "JSX" },
            { loc: [25, 26], note: "Destruct no estado" },
            { loc: [28, 29], note: "PROPS" },
            { loc: [29, 32], note: "onClick" },
            { loc: [19, 23], note: "função upVote" },
            { loc: [39, 40], note: "render do App" },
            { loc: [32, 33], note: "Uso do count" },
            { loc: [33, 34], note: "Usando List" },
            { loc: [2, 3], note: "importando List" },
            { loc: [13, 18], note: "componentDidMount" },
            { loc: [33, 34], note: "Usando List" },
            { loc: [0, 50], title: "É isso" }
          ]}
        />
        {/* React 16 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary" caps>
            !!! REACT 16+ !!!
          </Heading>
          <Image width="50%" src={images.oh} />
        </Slide>
        {/* Tamanho menor */}
        <Slide transition={["spin"]} bgColor="whitesmoke">
          <Heading size={3} textColor="dark" caps>
            Tamanho menor
          </Heading>
          <Image width="80%" src={images.reactSize} />
        </Slide>
        {/* Rederiza outras coisas */}
        <Slide transition={["slide"]} bgColor="codeBg">
          <Heading size={5} textColor="primary" caps>
            Método <b>render</b> mais poderoso
          </Heading>
          <Layout>
            <Fill>
              <Text textColor="primary">Arrays</Text>
              <CodePane
                style={{ fontSize: "18px" }}
                lang="jsx"
                source={require("raw-loader!../assets/code/renderArray.example")}
              />
            </Fill>
            <Appear>
              <Fill>
                <Text textColor="primary">String</Text>
                <CodePane
                  style={{ fontSize: "18px" }}
                  lang="jsx"
                  source={require("raw-loader!../assets/code/renderString.example")}
                />
              </Fill>
            </Appear>
          </Layout>
          <Layout>
            <Appear>
              <Fill>
                <Text textColor="primary">Fragment</Text>
                <CodePane
                  style={{ fontSize: "18px" }}
                  lang="jsx"
                  source={require("raw-loader!../assets/code/renderFragment.example")}
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        {/* Tratamento de error */}
        <Slide transition={["spin"]} bgColor="tertiary">
          <Heading size={4} textColor="dark" caps>
            Melhor tratamento de erros
            <Text textColor="red">ANTES</Text>
          </Heading>
          <Appear>
            <Text textColor="dark">
              Se um componente lança um erro de execução, remove toda a sub
              árvore do componente
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="dark" caps>
            Melhor tratamento de erros
            <Text textColor="red">DEPOIS</Text>
          </Heading>

          <List>
            <ListItem>Introduzindo Error boundaries</ListItem>
            <ListItem>componentDidCatch(error, info)</ListItem>
            <ListItem>Mostra uma outra UI quando da error</ListItem>
            <ListItem>Como usar?</ListItem>
          </List>
          <Appear>
            <CodePane
              style={{ fontSize: "18px" }}
              lang="jsx"
              source={require("raw-loader!../assets/code/usingError.example")}
            />
          </Appear>
        </Slide>
        {/* Code de error handling */}
        <CodeSlide
          theme={theme}
          bgColor="codeSlideBg"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code/errorBoundary.example")}
          ranges={[
            { loc: [0, 50], title: "Tratando Errors" },
            { loc: [3, 4], note: "Estado de erro para false " },
            { loc: [6, 10], note: "componentDidCatch(error, info)" },
            { loc: [12, 15], note: "Fallback UI" },
            {
              loc: [15, 16],
              note: "Se nada tiver errado, retorna a sub árvore"
            }
          ]}
        />
        {/* Portals */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="dark" caps>
            Portals
          </Heading>
          <Heading size={5} textColor="tertiary" caps>
            Permite renderizar elementos DOM fora da sua sub árvore
          </Heading>
          <Image width="40%" src={images.portalDiagram} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Para que serve?
          </Heading>
          <List>
            <ListItem>Modais</ListItem>
            <ListItem>Tooltips</ListItem>
            <ListItem>Caixas de diálogos</ListItem>
            <ListItem>
              Qualquer coisa que precisa ficar por cima de um <i>overflow</i>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/13oq4pxzlq"
            style={codesandboxStyle}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Slide>
        <CodeSlide
          theme={theme}
          bgColor="codeSlideBg"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code/portal.example")}
          ranges={[
            { loc: [0, 50], title: "Componente Portal" },
            { loc: [2, 4], note: "Pega o elemento" },
            { loc: [8, 9], note: "Cria um elemento wrapper" },
            { loc: [11, 14], note: "Anexa o elemento criado" },
            { loc: [15, 18], note: "Remove o elemento criado" },
            {
              loc: [20, 24],
              note: "Renderiza os filhos do componente dentro do el"
            },
            {
              loc: [20, 24],
              note: "Lembrando que o el destá dentro do modalRoot"
            }
          ]}
        />
        <CodeSlide
          theme={theme}
          bgColor="codeSlideBg"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code/modal.example")}
          ranges={[
            { loc: [0, 50], title: "Componente Modal" },
            {
              loc: [6, 18],
              note:
                "O que está englobado pela tag portal, será renderizado no modalRoot"
            }
          ]}
        />
        {/* Create ref */}
        <Slide transition={["zoom"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            createRef/ForwardRef
          </Heading>
          <List>
            <Appear>
              <ListItem>
                React tenta abstrair quase todas as operações feitas no DOM
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>O dev faz o resto - Ref</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                A API antiga tinha falhas -
                <Link
                  href="https://github.com/facebook/react/issues/1373"
                  target="blank"
                >
                  Veja aqui
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="codeBg">
          <Heading size={4} textColor="primary">
            createRef
          </Heading>
          <CodePane
            style={{ fontSize: "18px" }}
            lang="jsx"
            source={require("raw-loader!../assets/code/createRef.example")}
          />
        </Slide>
        {/* FowardRef */}
        <Slide transition={["spin"]} bgColor="primary" textColor="dark">
          <Heading size={4} textColor="tertiary">
            forwardRef
          </Heading>
          <List>
            <ListItem>
              Possibilita acessar um elemento a partir de outro componente
            </ListItem>
            <ListItem>Ex: foco, seleção, animações, etc.</ListItem>
            <ListItem>Diferente de props</ListItem>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary" textColor="dark">
          <iframe
            src="https://codesandbox.io/embed/xp8om4l17o"
            style={codesandboxStyle}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Slide>
        {/* Ciclos de vida */}
        <Slide transition={["spin"]} bgColor="primary" textColor="dark">
          <Heading size={2} textColor="dark">
            Ciclos de vida
          </Heading>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="dark">
          <Heading size={4} textColor="red">
            Antigo
          </Heading>
          <Image width="100%" src={images.lifecycleOld} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="dark">
          <List>
            <ListItem>Ciclo de vida bem declarativo</ListItem>
            <ListItem>Mudou ao longo do tempo</ListItem>
            <ListItem>Várias maneiras de realizar uma tarefa</ListItem>
            <ListItem>Não é claro qual é a melhor</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="dark" textColor="primary">
          <Heading size={4} textColor="red">
            Remoção de algumas chamadas
          </Heading>
          <Appear>
            <List>
              <ListItem>componentWillMount</ListItem>
              <ListItem>componentWillReceiveProps</ListItem>
              <ListItem>componentWillUpdate</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="dark" textColor="primary">
          <Image width="100%" src={images.cant_believe} />
        </Slide>
        <Slide transition={["slide"]} bgColor="dark" textColor="primary">
          <Image width="80%" src={images.fine} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary" textColor="dark">
          <Heading size={4} textColor="primary">
            Adição de 2 novas API's
          </Heading>
          <List>
            <ListItem>getDerivedStateFromProps</ListItem>
            <ListItem>getSnapshotBeforeUpdate</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="dark">
          <Heading size={4} textColor="red">
            Novo
          </Heading>
          <Image width="100%" src={images.lifecycleNew} />
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary" textColor="dark">
          <iframe
            src="https://codesandbox.io/embed/z3pxwy4yz4"
            style={codesandboxStyle}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Slide>
        <Slide transition={["spin"]} bgColor="codeBg">
          <CodePane
            style={{ fontSize: "18px" }}
            lang="jsx"
            source={require("raw-loader!../assets/code/getSnapshot.example")}
          />
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="dark">
          <Heading size={4} textColor="tertiary">
            getDerivedStateFromProps
          </Heading>
          <Appear>
            <Image width="80%" src={images.nooo} />
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="dark">
          <Heading size={4} textColor="tertiary">
            getDerivedStateFromProps
          </Heading>
          <Text textColor="dark">
            Usado apenas em casos raros -
            <Link href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state">
              Veja aqui
            </Link>
          </Text>
          <Appear>
            <CodePane
              style={{ fontSize: "18px" }}
              lang="jsx"
              source={require("raw-loader!../assets/code/getDerivedState.example")}
            />
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary" textColor="dark">
          <Heading size={4} textColor="primary" caps>
            Context API
          </Heading>
        </Slide>
        <Slide transition={["spin"]} bgColor="white" textColor="dark">
          <Heading size={4} textColor="tertiary" caps>
            Context API
          </Heading>
          <List>
            <ListItem>A antiga era muito experimental</ListItem>
            <ListItem>Evita o prop drilling</ListItem>
            <ListItem>Use para definir um estado global da aplicação</ListItem>
            <ListItem>Autenticação de usuários, linguagem, tema, etc</ListItem>
            <ListItem>API - Provider e Consumer</ListItem>
          </List>
        </Slide>
        <CodeSlide
          theme={theme}
          bgColor="codeSlideBg"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code/contextProvider.example")}
          ranges={[
            { loc: [0, 50], title: "Context Provider" },
            {
              loc: [2, 4],
              note: "Instancia o context com um valor padrão"
            },
            {
              loc: [2, 4],
              note:
                "Veja que está exportando para ser usada nos componentes filhos"
            },
            { loc: [8, 9], note: "Seta o estado para o tema padrão" },
            { loc: [15, 20], note: "Instancia o valor de context" },
            { loc: [11, 14], note: "Método para mudar o tema" },
            {
              loc: [21, 27],
              note:
                "ThemeContext.Provider sendo o valor como a constante context"
            }
          ]}
        />
        <Slide transition={["spin"]} bgColor="codeBg">
          <CodePane
            style={{ fontSize: "18px" }}
            lang="jsx"
            source={require("raw-loader!../assets/code/contextConsumer.example")}
          />
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary" textColor="dark">
          <iframe
            src="https://codesandbox.io/embed/qzknxnjzrw"
            style={codesandboxStyle}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps>
            Considerações
          </Heading>
          <List>
            <ListItem>
              Usa o padrão{" "}
              <Link href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce">
                {" "}
                Render prop
              </Link>
            </ListItem>
            <ListItem>
              Na mudança do valor, todos os filhos de Consumer serão
              renderizados
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              O mau uso afeta performance
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Se a idéia é só injetar props, considere{" "}
              <Link href="https://reactjs.org/docs/composition-vs-inheritance.html">
                composição de componentes
              </Link>
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Considere quando precisa um estado global da aplicação, não um
              substitudo de Redux/MobX
            </ListItem>
          </List>
        </Slide>
        {/* <CodeSlide
          theme={theme}
          bgColor="codeSlideBg"
          transition={[]}
          lang="jsx"
          style={{ fontSize: "10px!important" }}
          code={require("raw-loader!../assets/code/contextConsumer.example")}
          ranges={[
            { loc: [0, 50], title: "Context Consumer" },
            {
              loc: [1, 2],
              note: "importa o ThemeContext"
            },
            {
              loc: [6, 35],
              note: "Render prop!"
            },
            { loc: [8, 9], note: "Seta o estado para o tema padrão" },
            { loc: [15, 20], note: "Instancia o valor de context" },
            { loc: [11, 14], note: "Método para mudar o tema" },
            {
              loc: [21, 27],
              note:
                "ThemeContext.Provider sendo o valor como a constante context"
            }
          ]}
        /> */}
        <Slide transition={["spin"]} bgColor="dark" textColor="primary">
          <Heading size={4} textColor="primary" caps>
            And Beyond!!!
          </Heading>
          <Image width="40%" src={images.infinty} />
          <List textColor="primary" size={3}>
            <Appear>
              <ListItem textSize={40}>React Fiber</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={40}>Async Rendering</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={40}>React Suspense</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" textColor="black">
          <Heading size={4} textColor="primary" caps>
            Como React funciona
          </Heading>
          <List textColor="primary" size={3}>
            <ListItem>
              Possui o DOM Virtual de acordo com a árvore de elementos
            </ListItem>
            <ListItem>
              Quando ocorre uma mudança, checa no DOM virtual para adicionar,
              remover ou atualizar os elementos Reais
            </ListItem>
            <Appear>
              <ListItem>Reconciliação</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="black">
          <Heading size={4} textColor="tertiary" caps>
            OK. Mas qual o problema?
          </Heading>
          <List>
            <Appear>
              <ListItem>Serial</ListItem>
            </Appear>
            <Appear>
              <ListItem>Uma vez que ele começou, o render não para</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pense em uma vida sem git</ListItem>
            </Appear>
            <Appear>
              <ListItem>React Fiber ao resgate</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="black">
          <Heading size={4} textColor="tertiary" caps>
            React Fiber
          </Heading>
          <List>
            <ListItem>
              Arquitetura interna do React inteiramente reconstruída
            </ListItem>
            <ListItem>
              Permite que React pause e continue tarefas que mais importam
            </ListItem>
            <ListItem>Em um nível mais alto, trabalha com prioridades</ListItem>
            <ListItem>
              O teclar de um usuário é mais importante que renderizar 100
              componentes
            </ListItem>
            <ListItem>
              Precursor para as próximas funcionalidades que React quer oferecer
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="dark" textColor="black">
          <Heading size={4} textColor="white">
            Síncrono
          </Heading>
          <Image width="100%" src={images.sync} />
        </Slide>
        <Slide transition={["fade"]} bgColor="dark" textColor="black">
          <Heading size={4} textColor="white">
            Assíncrono - Time Slicing
          </Heading>
          <Image width="100%" src={images.async} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="black">
          <Heading size={4} textColor="tertiary" caps>
            Porque isso é muito f*da?
          </Heading>
          <List>
            <ListItem style={{ marginTop: "20px" }}>
              Framework sabe priorizar tarefas
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              A experiência do usuário não sofre
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Aplicação mais performática e flúida
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="codeBg" textColor="primary">
          <Heading size={4} textColor="tertiary" caps>
            React Suspense
          </Heading>
          <List>
            <Appear>
              <ListItem>Foca em IO</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Resumindo, prende a renderização até que uma condição é atingida
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Lembra um pouco uma Promise</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Se está carregando um conteúdo, mostra um spinner até carregar
                os dados
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Image width="60%" src={images.after} />
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="codeBg" textColor="primary">
          <Heading size={4} textColor="tertiary" caps>
            Porque precisamos disso?
          </Heading>
          <List>
            <ListItem>
              Não precisa implementar a tela e lógica de carregamento
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Pode evitar muitos spinners e conteúdo "pulando" na página
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Fica mais complicado com vários conteúdos ou condições específicas
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Com o async mode vai ficar ainda mais complexo
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="dark" textColor="black">
          <Heading size={4} textColor="white">
            Suspense
          </Heading>
          <Image width="100%" src={images.suspense} />
        </Slide>
        <Slide transition={["spin"]} bgColor="dark" textColor="black">
          <Heading size={4} textColor="white">
            Suspense 2
          </Heading>
          <Image width="100%" src={images.suspense2} />
        </Slide>
        <Slide transition={["fade"]} bgColor="dark" textColor="black">
          <Heading size={4} textColor="white">
            Suspense 3
          </Heading>
          <Image width="100%" src={images.suspense3} />
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary" textColor="black">
          <Heading size={4} textColor="white">
            E muito mais
          </Heading>
          <List>
            <ListItem>Code Splitting</ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Condições de corrida
            </ListItem>
            <ListItem style={{ marginTop: "20px" }}>
              Condições específicas
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="black">
          <Heading size={4} textColor="tertiary">
            Porque React está mudando o jogo?
          </Heading>
          <List>
            <Appear>
              <ListItem style={{ marginTop: "20px" }}>
                Os grandes problemas são CPU e IO
              </ListItem>
            </Appear>
            <Appear style={{ marginTop: "20px" }}>
              <ListItem>Todo mundo quer o seu app voando</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginTop: "20px" }}>
                Mas isso não é realidade pra todos
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginTop: "20px" }}>
                No final das contas, o que conta é a experiência do usuário
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginTop: "20px" }}>
                E é ai que React vai ganhar a luta
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="dark" textColor="black">
          <Heading size={4} textColor="primary">
            ¯\_(ツ)_/¯
          </Heading>
          <Image width="100%" src={images.haters} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="black">
          <Heading size={4} textColor="tertiary">
            Obrigado, galera!
          </Heading>
          <Image width="60%" src={images.thanks} />
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="black">
          <Heading size={2} textColor="tertiary">
            Talks
          </Heading>
          <Text textColor="dark" textSize={30} style={{ marginTop: "20px" }}>
            Beyond React 16 - Dan Abramov -
            <Link href="https://www.youtube.com/watch?v=v6iR3Zk4oDY">
              {" "}
              Link
            </Link>
          </Text>
          <Text textColor="dark" textSize={30} style={{ marginTop: "20px" }}>
            React Suspense - Andrew Clark -
            <Link href="https://www.youtube.com/watch?v=z-6JC0_cOns">
              {" "}
              Link
            </Link>
          </Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="black">
          <Heading size={4} textColor="tertiary">
            Palestra feita em React ❤ -
            <Link href="https://formidable.com/open-source/spectacle/docs/getting-started/">
              Spectacle
            </Link>
          </Heading>
          <Text textColor="dark" textSize={30} style={{ marginTop: "20px" }}>
            <Link href="https://github.com/jamiebuilds/spectacle-code-slide">
              Spectacle Code Slide
            </Link>
          </Text>
          <Text textColor="dark" textSize={30} style={{ marginTop: "30px" }}>
            http://react-infinity-and-beyond.surge.sh/
          </Text>
          <Text textColor="dark" textSize={30} style={{ marginTop: "40px" }}>
            <Image width="10%" src={images.twitterLogo} />{" "}
            <Link href="https://twitter.com/11Davidpn">@11Davidpn</Link>
          </Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="dark" textColor="black">
          <Heading size={2} textColor="tertiary">
            Perguntas?
          </Heading>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="black">
          <Heading size={2} textColor="dark">
            Obrigado ❤
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
