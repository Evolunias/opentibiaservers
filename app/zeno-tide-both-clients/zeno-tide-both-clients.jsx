import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('zeno-tide-both-clients');
}

export default function ZenoTideBothClientsPage() {
  return <StaticExactMatchPage slug="zeno-tide-both-clients" />;
}
