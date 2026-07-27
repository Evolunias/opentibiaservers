import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-fresh-start-server');
}

export default function Yurots11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-fresh-start-server" />;
}
