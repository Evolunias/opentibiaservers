import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-poland');
}

export default function XanteriaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-poland" />;
}
