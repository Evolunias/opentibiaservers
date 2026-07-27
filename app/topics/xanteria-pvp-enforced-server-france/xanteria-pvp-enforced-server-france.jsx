import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-france');
}

export default function XanteriaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-france" />;
}
