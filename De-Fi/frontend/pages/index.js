import React from 'react';
import { useConnect, useAccount } from 'wagmi';

function Home  () {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const { connected } = connectData;
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  if (connected) {
    return (

      <div className='py-24 text-center bg-slate-600 p-2'>
        <p className='text-2xl font-bold'>
          Welcome {accountData?.ens?.name || accountData?.address}
        </p>
        <button
          className='mx-auto mt-10 rounded bg-slate-300 p-2'
          onClick={disconnect}
        >
          Disconnect
        </button>
        <div className="navbar py-24 text-center bg-slate-600 p-2">
        {/* <WalletButton /> */}
    <nav>
      <label className="Brand">Comp-finance</label>
      <ul className="nav-area">
        <li>
          <a className="dashboard" >
            DashBoard
          </a>
        </li>
        <li>
          <a >History</a>
        </li>
        <li>
          {/* <WalletButton>Connect wallet</WalletButton>  */}
        </li>
      </ul>
    </nav>
     <div className="trades">
       
  </div> 
  </div>
        
    
        <InfoSection />
      </div>
    );
  }

  return (
    <div className='py-24 text-center'>
  
      <h1 className='text-2xl font-bold'>Welcome | to Compound-Defi Clone </h1>
      <p className='mt-10'>Connect your wallet:</p>
      <div className='mt-5 flex justify-center gap-6'>
        {/* connectData.connectors contains the list of available 'connectors' like Metamask, WalletConnect, etc */}
        {connectData.connectors.map((x) => (
          <button
            className='rounded bg-slate-200 p-2'
            key={x.id}
            onClick={() => connect(x)}
          >
            {x.name}
            {!x.ready && ' (unsupported)'}
          </button>
        ))}
      </div>
      {/* <Dashboard/> */}

      {connectError && (
        <p className='text-red-500'>
          {connectError?.message ?? 'Failed to connect'}
        </p>
      )}
    </div>
  );
};

const InfoSection = () => {
    return (
      <div className='mt-10'>
        <hr className='my-4' />
        <h2 className='text-xl font-bold'>If you need help</h2>
        <div className='flex flex-col gap-2 mt-2'>
          <a
            href='https://wagmi.sh'
            target='_blank'
            className='underline text-gray-200'
          >
            Link to wagmi docs
          </a>
          <a
            href='https://github.com/dhaiwat10/create-web3-frontend'
            target='_blank'
            className='underline text-gray-200'
          >
            Open an issue on Github
          </a>
        </div>
      </div>
      
    );
  };
  

export default Home;
