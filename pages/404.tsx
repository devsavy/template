import Head from "next/head";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 Page | Opiferus Budgeting</title>
        <link rel="icon" href="/TsWeb/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-full mt-20">
        <article className="flex items-center justify-center space-x-2">
          <div className="flex flex-col items-center space-y-1">
            <h1>404</h1>
            <small>Not found</small>
          </div>
          <div className="h-16 w-[1px] bg-gray-700 "></div>
          <p>Sorry the page could not be found.</p>
        </article>

        <Link
          href={"/"}
          className="bg-[#337AB7] p-2 px-3 rounded-md text-md mt-3 !text-white"
        >
          Return to Front Page
        </Link>
      </div>
    </>
  );
};

export default NotFound;
