import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-argentina');
}

export default function YurotsRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-argentina" />;
}
