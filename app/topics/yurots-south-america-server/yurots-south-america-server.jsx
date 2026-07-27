import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-south-america-server');
}

export default function YurotsSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-south-america-server" />;
}
