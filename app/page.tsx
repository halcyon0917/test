import TokenSetter from "./components/TokenSetter";

export default function Home() {
  return (
    <main className='p-4 m-auto max-w-xl'>
      <h1 className='text-5xl'>VAM (versa-vam)</h1>
      <p>
        domain: <span className='font-bold text-blue-400'>vam.adriantdc.com</span>
      </p>
      <TokenSetter />
    </main>
  );
}
