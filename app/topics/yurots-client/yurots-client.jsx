import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-client');
}

export default function YurotsClientKeywordPage() {
  return <StaticKeywordPage slug="yurots-client" />;
}
