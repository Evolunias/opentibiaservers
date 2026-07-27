import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('unline');
}

export default function UnlinePage() {
  return <StaticExactMatchPage slug="unline" />;
}
