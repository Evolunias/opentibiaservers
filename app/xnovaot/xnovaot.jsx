import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('xnovaot');
}

export default function XnovaotPage() {
  return <StaticExactMatchPage slug="xnovaot" />;
}
