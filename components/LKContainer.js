import A from "./A";
import Head from "next/head";

const LKContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"ulbi tv, nextjs" + keywords}></meta>
        <title>ЛК</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />
        <A href={"/login"} text="Войти" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default LKContainer;
