import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-poland');
}

export default function YurotsRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-poland" />;
}
