import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-mexico');
}

export default function YurotsPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-mexico" />;
}
