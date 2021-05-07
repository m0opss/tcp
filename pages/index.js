import MainContainer from "../components/MainContainer";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import MainLinks from "../components/Main/MainLinks";
import MainBanner from "../components/Main/MainBanner";
import Nav from "../components/Nav/Nav";

import styles from "../styles/Main/main.module.sass";
import Popular from "../components/Main/Popular";

const Index = ({ items }) => {
  return (
    <MainContainer keywords={"main page"}>
      <MainHeader />
      <Nav />
      <div id={styles.main}>
        <div className="container">
          <div className="flex">
            <MainLinks />
            <MainBanner />
          </div>
        </div>
      </div>
      <Popular items={items} />
      <MainFooter />
    </MainContainer>
  );
};

export default Index;

export async function getStaticProps(context) {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  // const users = await response.json()
  const items = [...test_arr];

  return {
    props: { items }, // will be passed to the page component as props
  };
}

const test_arr = [
  {
    id: 1,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
  {
    id: 2,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
  {
    id: 3,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
  {
    id: 4,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
  {
    id: 5,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
  {
    id: 6,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
  {
    id: 7,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
  {
    id: 8,
    img: "img/prod-1.png",
    name: "Ноутбук Samsung B6-E54312",
    category: "Компьютерная техника",
    categoryLink: "#",
    cost_dol: "24",
    cost_btc: "13 616",
  },
];
