import { Footer, Header, Navbar } from 'components/Layouts';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { FC, useEffect, useMemo } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { Connection, PublicKey } from '@solana/web3.js';
import {
  fetchStatusAccount,
  fetchUtilizationTracker,
  getAllOffers,
} from 'p2p-smart-contract/accounts';
import { useProgramStatus } from 'stores/useProgramStatus';
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');
import { usePoolStatus } from 'stores/usePoolState';
import { useTokenData } from 'stores/useTokenData';
import token_price_service from 'services/token_price';
import {
  allowedTokens,
  
} from 'utils/web3';
import { wlCollateralAccountInfo } from 'types';
import { Toast } from 'components/Toasts/Toast';
import { Loading } from 'components/Loading/Loading';
import { DevnetInformModal } from 'components/Modals/DevnetInformModal';
import useDisclosure from 'hooks/useDisclosure';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const connection = useMemo(
    () => new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC!),
    []
  );

  const setProgramStatus = useProgramStatus((state) => state.setProgramStatus);
  const {
    poolTracker,
    setPoolTracker,
    setTreasuries,
    setRawOffers,
    rawOffers,
  } = usePoolStatus();

  useEffect(() => {
    if (connection) {
      fetchStatusAccount(connection).then((value) => {
        setProgramStatus(value);
      });
    }
  }, [connection]);

  useEffect(() => {
    fetchUtilizationTracker(connection).then((value) => {
      setPoolTracker(value);
    });
  }, []);

  const { setAllTokenData } = useTokenData();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const rawOffersData = await getAllOffers(connection);
    setRawOffers(rawOffersData.allOffers);
    setTreasuries(rawOffersData.allTreasuries);
    const tokensData_ = [];
    for (const item of allowedTokens) {
      const {
        minMinApy,
        maxMaxApy,
        maxLtv,
        minExposure,
        currentPool,
        activeLoans,
      } = getTokenDataAggregration(
        item.mint.toBase58(),
        rawOffersData.allOffers
      );
      const tokenKey = item.tokenName;
      const priceInSol = await getTokenPrice(tokenKey);
      if (priceInSol == -1) {
        break;
      }
      const data = {
        image: item.image,
        name: item.name,
        perSol: priceInSol,
        currentPool: currentPool,
        activeLoans: activeLoans,
        duration: item.duration,
        ltv: maxLtv,
        minApy: minMinApy,
        maxApy: maxMaxApy,
        tokenAddress: item.mint.toBase58(),
        decimals: item.decimals,
        exposure: minExposure,
      };

      tokensData_.push(data);
    }
    setAllTokenData(tokensData_);
  };

  const getTokenDataAggregration = (
    tokenAddress: string,
    rawOffersInput: wlCollateralAccountInfo[]
  ) => {
    let minMinApy = 120;
    let maxMaxApy = 150;
    let maxLtv = 100;
    let minExposure = 100;
    let currentPool = 0;
    const filtered = rawOffersInput
      .filter((item) => item.tokenAddress.toBase58() == tokenAddress)
      .sort((a, b) => b.lastUpdatedTs - a.lastUpdatedTs);
    if (filtered.length > 0) {
      const minApys = filtered.map((item) => {
        return item.minApy;
      });
      const maxApys = filtered.map((item) => {
        return item.maxApy;
      });
      const ltvs = filtered.map((item) => {
        return item.ltv;
      });
      const exposures = filtered.map((item) => {
        return item.exposure;
      });
      const eligibleAmounts = filtered.map((item) => {
        return item.solEligibleAmount;
      });

      minMinApy = Math.min(...minApys);
      maxMaxApy = Math.max(...maxApys);
      maxLtv = Math.max(...ltvs);
      minExposure = Math.min(...exposures);
      currentPool = eligibleAmounts.reduce((a, b) => a + b, 0);
    }

    return {
      minMinApy: minMinApy,
      maxMaxApy: maxMaxApy,
      maxLtv: maxLtv,
      minExposure: minExposure,
      currentPool: currentPool,
      activeLoans: filtered.length,
    };
  };

  const {
    isOpen: isOpenNotiModal,
    open: openNotiModal,
    close: closeNotiModal
  } = useDisclosure()

  useEffect(() => {
    const hideNewUserModal = localStorage.getItem("hideNewUserModal");
    if ((!hideNewUserModal || (hideNewUserModal == "false")) && (process.env.NEXT_PUBLIC_ENV == "develop")) {
      openNotiModal()
    }
  }, [])

  const getTokenPrice = async (tokenKey: string) => {
    try {
      const resp = await token_price_service.getAndCacheTokenPrices(tokenKey);
      if (resp.status == 200) {
        const priceInSol = resp.data.price_in_sol as number;
        return priceInSol;
      }
      else {
        return -1
      }
    } catch (err) {
      console.log(err)
      alert('cannot get token price from coingecko please wait 3 mins and comeback again')
      return -1
    }
  };

  return (
    <>
      <ContextProvider>
        <div className='flex flex-col h-screen font-myriadlight'>
          <DevnetInformModal
            isOpen={isOpenNotiModal}
            onClickClose={closeNotiModal}
          />
          <Toast />
          <Loading />
          {router.pathname !== '/' && <Header />}
          <Navbar />
          <Component {...pageProps} />
          {/* <div className='hidden md:flex flex-col items-end absolute bottom-[76px] right-8'><Contact/></div> */}
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;

// {`absolute ${router.pathname == '/lend' || router.pathname == '/borrow' ? 'xxl:top-[450px] md:top-[300px] top-[286px]' : 'xxl:top-[320px] top-[300px]'} xxl:left-[-102px] left-[-78px]`}
