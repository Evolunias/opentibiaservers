import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-fresh-start-server');
}

export default function Yurots80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-fresh-start-server" />;
}
