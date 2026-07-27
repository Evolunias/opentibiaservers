import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('zunera');
}

export default function ZuneraPage() {
  return <StaticExactMatchPage slug="zunera" />;
}
