import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { Container } from 'components/Layouts';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const FAQ = [
  {
    header: 'What is Lending Lab?',
    description:
      'A credit scoring-powered peer-to-peer lending protocol based in Solana.',
  },
  {
    header: 'What happens in case of the default?',
    description: 'Lenders will be able to claim the collateral.',
  },
  {
    header: 'What happens to tokens after taking a loan?',
    description: 'Tokens will be transferred to an escrow account. ',
  },
  {
    header: 'Where can I learn more about credit scores?',
    description: 'Check out our whitepaper here:',
    link: 'https://atadia.gitbook.io/wp/products-and-services/credit-risk-and-lending/credit-scoring',
  },
  {
    header: 'How does having a good credit score help with my borrowing game?',
    description:
      'Interest rates are personalised for each loan according to two factors: (i) the borrower’s credit score and (ii) the risk associated with their collateral. These fundamentals are then matched with the APY ranges that are on offer at the moment of loan request.  The higher your credit score, the more likely you would end up with a lower interest rate offer.',
  },
  {
    header: 'Is there a limit to how much I can borrow?',
    description:
      'Yes, to make sure some amount of loan is available for borrowers at any moment in time, each borrower (each credit score) can borrow up to 80% of the loan amount designated for each collateral.',
  },
  {
    header:
      'What role does $ATA, or $ATA via NeoAtadians, play in this ecosystem?',
    description:
      'Having $ATA staked long term will raise your borrowing limit. Feature coming soon...',
  },
  { header: 'Learn about mechanics?', description: 'Check out ', link: 'https://atadia.gitbook.io/wp/products-and-services/credit-risk-and-lending/lending-lab' },
  {
    header: 'How were tokens selected?',
    description:
      'Accepted tokens were selected based on their historical price volatility as well as their overall “acceptance” in the Solana community.',
  },
  {
    header: 'What if I pay my loan early?',
    description:
      'Interests are calculated based on the total duration of the loan, which means you will still be required to pay full interest.',
  },
  {
    header: 'Does Lending Lab charge a fee?',
    description:
      'Borrowers are charged a fee of 15% on interest. Lenders don’t pay any fees.',
  },
  {
    header: 'What benefits do OGA holders get with the Lending Lab?',
    description:
      'OGA holders get 50% off the platform fee charged to borrowers.',
  },
];

const Faqs: NextPage = (props) => {
  return (
    <>
    <Head>
        <title>FAQs - Lending Lab</title>
      </Head>
      <div className='md:text-3xl text-[22px] font-myriadreg tracking-[6px] md:py-12 py-7 mx-12'>
        FREQUENTLY ASKED QUESTIONS
      </div>
      <Container>
        {FAQ.map((data, index) => (
          <div className='md:px-12 px-5 py-5 border border-white bg-black rounded-[10px] mb-7 md:text-[22px] text-base' key={index}>
            <Accordion allowToggle>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <div
                        className={`md:text-[26px] text-xl flex-1 text-left font-myriadreg ${
                          isExpanded ? 'text-orange-light' : 'text-white'
                        }`}
                      >
                        {data.header}
                      </div>
                      {isExpanded ? (
                        <div className='text-2xl'>-</div>
                      ) : (
                        <div className='text-2xl'>+</div>
                      )}
                    </AccordionButton>
                    <AccordionPanel>
                      <div className='md:pt-[10px] pt-1'>
                        {data.description}
                        {data.link && (
                          <Link
                            href={data.link}
                            target='_blank'
                            className='hover:underline'
                          >
                            {' '}{data.link}
                          </Link>
                        )}
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Faqs;
