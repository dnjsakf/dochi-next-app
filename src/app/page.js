import Counter from "./(components)/Counter";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Home({ Component, pageProps }) {
  return (
    <div>
      Hello, NextJS!!
      <div>
        <Counter />
      </div>
    </div>
  );
}
