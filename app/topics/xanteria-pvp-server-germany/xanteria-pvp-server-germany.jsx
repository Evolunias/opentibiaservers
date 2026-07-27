import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-germany');
}

export default function XanteriaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-germany" />;
}
