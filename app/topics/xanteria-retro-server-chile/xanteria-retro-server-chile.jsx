import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-chile');
}

export default function XanteriaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-chile" />;
}
