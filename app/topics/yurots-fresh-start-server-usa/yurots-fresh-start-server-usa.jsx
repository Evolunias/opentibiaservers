import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-usa');
}

export default function YurotsFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-usa" />;
}
