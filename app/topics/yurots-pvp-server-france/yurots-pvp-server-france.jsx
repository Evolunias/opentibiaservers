import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-france');
}

export default function YurotsPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-france" />;
}
