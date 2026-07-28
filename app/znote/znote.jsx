import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('znote');
}

export default function ZnotePage() {
  return <StaticExactMatchPage slug="znote" />;
}
