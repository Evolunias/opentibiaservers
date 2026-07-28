import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('valmorots-launch-1-march-2026');
}

export default function ValmorotsLaunch1March2026Page() {
  return <StaticExactMatchPage slug="valmorots-launch-1-march-2026" />;
}
