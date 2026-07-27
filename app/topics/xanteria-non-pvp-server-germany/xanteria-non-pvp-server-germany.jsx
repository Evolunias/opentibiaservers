import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-germany');
}

export default function XanteriaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-germany" />;
}
