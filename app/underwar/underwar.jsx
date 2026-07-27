import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('underwar');
}

export default function UnderwarPage() {
  return <StaticExactMatchPage slug="underwar" />;
}
