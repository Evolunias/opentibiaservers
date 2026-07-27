import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('xerena');
}

export default function XerenaPage() {
  return <StaticExactMatchPage slug="xerena" />;
}
