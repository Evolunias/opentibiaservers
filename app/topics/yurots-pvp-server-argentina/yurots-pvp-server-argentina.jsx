import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-argentina');
}

export default function YurotsPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-argentina" />;
}
