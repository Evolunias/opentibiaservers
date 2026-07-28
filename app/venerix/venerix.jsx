import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('venerix');
}

export default function VenerixPage() {
  return <StaticExactMatchPage slug="venerix" />;
}
