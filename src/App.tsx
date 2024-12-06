import questions from './mocks/questions'

import Header from './components/layout/header/header';
import Intro from './components/blocks/intro/intro';
import Cards from './components/blocks/cards/cards';
import Sleeps from './components/blocks/sleeps/sleeps';
import Author from './components/blocks/author/author';
import Questions from './components/blocks/questions/questions';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <main>
        <div className={styles.hiddenSections}>
          <Intro />
          <Cards />
        </div>
        <Sleeps></Sleeps>
        <Author></Author>
        <Questions questionts={questions}></Questions>
      </main>
    </div>
  );
}

export default App;