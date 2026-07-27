import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-mexico');
}

export default function YurotsRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-mexico" />;
}
