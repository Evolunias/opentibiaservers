import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-uk-server');
}

export default function YurotsUkServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-uk-server" />;
}
