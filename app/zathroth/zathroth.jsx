import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('zathroth');
}

export default function ZathrothPage() {
  return <StaticExactMatchPage slug="zathroth" />;
}
