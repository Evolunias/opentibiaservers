import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-usa');
}

export default function YurotsPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-usa" />;
}
