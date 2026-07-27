import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-poland');
}

export default function XanteriaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-poland" />;
}
