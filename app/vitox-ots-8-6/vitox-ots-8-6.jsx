import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('vitox-ots-8-6');
}

export default function VitoxOts86Page() {
  return <StaticExactMatchPage slug="vitox-ots-8-6" />;
}
