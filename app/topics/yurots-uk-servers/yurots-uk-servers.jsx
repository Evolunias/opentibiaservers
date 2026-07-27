import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-uk-servers');
}

export default function YurotsUkServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-uk-servers" />;
}
