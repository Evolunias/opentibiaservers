import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-open-pvp');
}

export default function ZaneraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="zanera-open-pvp" />;
}
