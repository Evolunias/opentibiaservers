import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-france');
}

export default function YurotsRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-france" />;
}
