import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('valeriaot');
}

export default function ValeriaotPage() {
  return <StaticExactMatchPage slug="valeriaot" />;
}
