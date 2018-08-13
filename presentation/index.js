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

const images = {
  reactLogo: require("../assets/react-logo.png"),
  infinty: require("../assets/infinity.gif"),

  // routerLogo: require('../assets/react-router-logo.png'),
  // spectacleLogo: require('../assets/formidable-logo.svg'),
  twitterLogo: require("../assets/twitter-logo.svg"),
  // jestLogo: require('../assets/jest.svg'),
  githubLogo: require("../assets/github.svg"),
  blinking: require("../assets/blinking.gif"),
  oh: require("../assets/oh.gif")
};

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    grayBg: "#37474F",
    whitesmoke: "whitesmoke",
    dark: "#111"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

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
          bgColor="tertiary"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code/firstReact.example")}
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
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary" caps>
            !!! REACT 16+ !!!
          </Heading>
          <Image width="50%" src={images.oh} />
        </Slide>
        <Slide transition={["spin"]} bgColor="whitesmoke">
          <Heading size={3} textColor="dark" caps>
            Tamanho menor
          </Heading>
          <Image width="50%" src={images.oh} />
        </Slide>
        <Slide transition={["slide"]} bgColor="dark">
          <Heading size={5} textColor="primary" caps>
            Método <b>render</b> mais poderoso
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/firstReact.example")}
          />
        </Slide>
      </Deck>
    );
  }
}
