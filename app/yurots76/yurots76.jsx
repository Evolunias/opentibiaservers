import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('yurots76');
}

export default function Yurots76Page() {
  return <StaticExactMatchPage slug="yurots76" />;
}
