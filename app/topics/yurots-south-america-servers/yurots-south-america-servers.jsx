import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-south-america-servers');
}

export default function YurotsSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-south-america-servers" />;
}
