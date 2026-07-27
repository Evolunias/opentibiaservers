import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('valantis-online');
}

export default function ValantisOnlinePage() {
  return <StaticExactMatchPage slug="valantis-online" />;
}
