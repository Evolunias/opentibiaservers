import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-usa');
}

export default function YurotsRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-usa" />;
}
