import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-brazil');
}

export default function YurotsRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-brazil" />;
}
