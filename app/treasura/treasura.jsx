import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('treasura');
}

export default function TreasuraPage() {
  return <StaticExactMatchPage slug="treasura" />;
}
