import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('treasura-long-term-x1-start-12-04-2024-at-18-00-cest');
}

export default function TreasuraLongTermX1Start12042024At1800CestPage() {
  return <StaticExactMatchPage slug="treasura-long-term-x1-start-12-04-2024-at-18-00-cest" />;
}
