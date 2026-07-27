import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-latin-america');
}

export default function YurotsRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-latin-america" />;
}
