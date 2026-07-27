import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('zuna');
}

export default function ZunaPage() {
  return <StaticExactMatchPage slug="zuna" />;
}
