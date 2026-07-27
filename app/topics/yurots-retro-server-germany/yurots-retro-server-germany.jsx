import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-germany');
}

export default function YurotsRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-germany" />;
}
