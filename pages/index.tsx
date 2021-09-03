import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Form />
        </div>
    );
};

export default Home;
