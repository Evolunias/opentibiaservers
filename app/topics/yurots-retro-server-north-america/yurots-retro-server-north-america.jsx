import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-north-america');
}

export default function YurotsRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-north-america" />;
}
