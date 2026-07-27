import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp');
}

export default function YurotsPvpKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp" />;
}
