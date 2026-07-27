import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-argentina');
}

export default function YurotsFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-argentina" />;
}
