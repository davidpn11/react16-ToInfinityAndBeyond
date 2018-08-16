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
  lifecycleNew: require("../assets/lifecycle_new.png")
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
          <Text size={2} textColor="gray">
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
            <Appear>
              <ListItem>Framework JS</ListItem>
            </Appear>
            <Appear>
              <ListItem>Baseado em componentes</ListItem>
            </Appear>
            <Appear>
              <ListItem>Ciclo de vida bem detalhado</ListItem>
            </Appear>
            <Appear>
              <ListItem>Transferência de dados unidirecional (Flux)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                State (dados próprios) e Props(dados recebidos)
              </ListItem>
            </Appear>
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
            { loc: [13, 18], note: "componentDidMount" },
            { loc: [2, 3], note: "importando List" },
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
            <Appear>
              <Text textColor="red">ANTES</Text>
            </Appear>
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
            <Appear>
              <ListItem>Introduzindo Error boundaries</ListItem>
            </Appear>
            <Appear>
              <ListItem>componentDidCatch(error, info)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Mostra uma outra UI quando da error</ListItem>
            </Appear>
            <Appear>
              <ListItem>Como usar?</ListItem>
            </Appear>
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
            <ListItem>Caixas de dialogos</ListItem>
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
              <ListItem>O dev faz o resto</ListItem>
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
            <Appear>
              <ListItem>
                Possibilita acessar um elemento a partir de outro componente
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Ex: foco, seleção, animações, etc.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Diferente de props</ListItem>
            </Appear>
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
            <Appear>
              <ListItem>Mudou ao longo do tempo</ListItem>
            </Appear>
            <Appear>
              <ListItem>Várias maneiras de realizar uma tarefa</ListItem>
            </Appear>
            <Appear>
              <ListItem>Não é claro qual é a melhor</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="dark" textColor="primary">
          <Heading size={4} textColor="red">
            Remoção de alguns hooks
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
            Usado apenas em casos raros -{" "}
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
      </Deck>
    );
  }
}
