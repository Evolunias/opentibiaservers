import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-fresh-start-server');
}

export default function Yurots100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-fresh-start-server" />;
}
