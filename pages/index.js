import dynamic from "next/dynamic";
import { Suspense } from "react";
import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner";

const DynamicBody = dynamic(() => import("../components/Body"), {
  suspense: true,
});

const Home = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicBody />
      </Suspense>
    </Layout>
  );
};

export default Home;
