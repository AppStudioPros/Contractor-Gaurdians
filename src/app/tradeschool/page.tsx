import type { Metadata } from 'next';
import { TradeschoolHero } from './components/TradeschoolHero';
import { ProgramOverview } from './components/ProgramOverview';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { MissionVision } from './components/MissionVision';
import { ProblemOpportunity } from './components/ProblemOpportunity';
import { ProgramModel } from './components/ProgramModel';
import { Curriculum } from './components/Curriculum';
import { FinancialSnapshot } from './components/FinancialSnapshot';
import { TradeschoolContact } from './components/TradeschoolContact';

export const metadata: Metadata = {
  title: 'Tradeschool Program',
  description:
    'Contractor Guardians Tradeschool Program (CGTP) - Building Trades. Building Homes. Building Futures.',
};

export default function TradeschoolPage() {
  return (
    <>
      <TradeschoolHero />
      <ProgramOverview />
      <ExecutiveSummary />
      <MissionVision />
      <ProblemOpportunity />
      <ProgramModel />
      <Curriculum />
      <FinancialSnapshot />
      <TradeschoolContact />
    </>
  );
}
